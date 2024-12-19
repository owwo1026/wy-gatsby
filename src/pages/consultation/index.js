import React, { useState, useEffect } from 'react';
import { Button, Textarea, Modal, Datepicker } from 'flowbite-react';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import TextField from '@mui/material/TextField';

import Layout from '@/components/layout';
import Eyebrow from '@/components/eyebrow';
import FormWrapper from '@/components/wrapper/form-wrapper';
import RadioGroup from '@/components/ui/radio-group';
import Input from '@/components/ui/input';
import { formatDate } from '@/utils/format-date';

const IndexPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalMsg, setModalMsg] = useState({
    iconType: -1,
    msg: '傳送失敗，請使用其他聯絡方式，謝謝',
  });
  const googleMap =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9444244977494!2d120.66601811190363!3d24.173681772302707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917d3a9fab9b9%3A0x159e76a584e8c677!2zNDA25Y-w54Gj5Y-w5Lit5biC5YyX5bGv5Y2A5paH5b-D6Lev5LiJ5q61NDQ36Jmf55Kw55CD5beo5pif5aSn5qiT!5e0!3m2!1szh-TW!2sjp!4v1685546131778!5m2!1szh-TW!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  const formSchema = z.object({
    name: z.string().min(1),
    phone: z.string().min(1),
    email: z.string().min(1).email(),
    address: z.string().nullish(),
    type: z.string(),
    housingStatus: z.string(),
    budgetRange: z.string(),
    remark: z.string().nullish(),
  });

  const {
    register,
    handleSubmit,
    control,
    setFocus,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      setFocus(firstErrorField);
    }
  }, [errors, setFocus]);

  const postNotify = async (msg) => {
    const handleError = () => {
      setOpenModal(true);
      setModalMsg({
        iconType: -1,
        msg: '傳送失敗，請使用其他聯絡方式，謝謝',
      });
    };
    const handleSuccess = () => {
      setOpenModal(true);
      setModalMsg({
        iconType: 1,
        msg: '送出成功，會盡快派專員聯絡您，謝謝！',
      });
    };
    let data = {
      message: msg,
      stickerPackageId: '789',
      stickerId: '10855',
      token: 'Bearer W06xfG8uS1SEjCmdRPbOFAFDcPfT97I4JXOcFaUrVxJ',
    };
    var formData = Object.keys(data)
      .map(function (keyName) {
        return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName]);
      })
      .join('&');
    const url = 'https://script.google.com/macros/s/AKfycbzyV4du500ZrIM2q7AX_COiFHHMF2u7jm5sDYEjDl7kAlquviLhH49eAlTAPvPUJD0Y/exec';
    // console.log('postNotify', url, formData);
    await axios({
      method: 'POST',
      timeout: 600000,
      redirect: 'follow',
      withCredentials: false,
      url: `${url}`,
      data: formData,
    })
      .then((response) => {
        // console.log('postNotify response', response);
        if (response.status === 200) {
          handleSuccess();
        } else {
          handleError();
        }
      })
      .catch((error) => {
        console.log('http error', error);
      });
  };

  const onFinish = async (data) => {
    // console.log('onFinish data', data);
    // 組裝要傳送的訊息
    var msg =
      '\n==== [新留言] ====' +
      `\n名稱: ${data.name ?? ''}` +
      `\n電話: ${data.phone ?? ''}` +
      `\n電子信箱: ${data.email ?? ''}` +
      `\n案件地址: ${data.address ?? ''}` +
      `\n類型: ${data.type ?? ''}` +
      `\n狀態: ${data.housingStatus ?? ''}` +
      `\n預算: ${data.budgetRange ?? ''}` +
      `\n需求說明: ${data.remark ?? ''}` +
      '\n==== [END] ====';
    // console.log('onFinish msg', msg);
    await postNotify(msg);
  };

  return (
    <Layout pageTitle="免費諮詢">
      <div id="#contact">
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 lg:py-12 md:py-8 py-4 mb-56">
            <Eyebrow label="CONSULTATION / 免費諮詢" />
            <p className="text-center">請填寫預約表單，送出後將會有專人與您聯絡，謝謝您！</p>
            <form className="px-36" onSubmit={handleSubmit((data) => onFinish(data))}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* 姓名 */}
                <FormWrapper title="姓名" isRequired>
                  <TextField id="name" label="姓名" variant="outlined" {...register('name')} errors={errors} />
                  {/* <Input id="name" placeholder="姓名" {...register('name')} errors={errors} /> */}
                </FormWrapper>
                {/* 電話 */}
                <FormWrapper title="電話" isRequired>
                  <Input id="phone" placeholder="電話" {...register('phone')} errors={errors} />
                </FormWrapper>
                {/* 電子信箱 */}
                <FormWrapper title="電子信箱" isRequired>
                  <Input id="email" type="email" placeholder="電子信箱" {...register('email')} errors={errors} />
                </FormWrapper>
                {/* Line ID */}
                <FormWrapper title="Line ID">
                  <Input id="lineId" type="lineId" placeholder="Line ID" {...register('lineId')} errors={errors} />
                </FormWrapper>
                {/* 案件地址 */}
                <FormWrapper title="案件地址" full>
                  <Input id="address" placeholder="案件地址" {...register('address')} errors={errors} />
                </FormWrapper>
                {/* 服務需求 */}
                <Controller
                  name="type"
                  control={control}
                  render={({ field: { ref, value, name, onChange } }) => (
                    <FormWrapper title="服務需求" isRequired full>
                      <RadioGroup
                        ref={ref}
                        options={[
                          { label: '預售屋(客變)', value: '預售屋(客變)' },
                          { label: '設計(純設計)', value: '室內設計(純設計)' },
                          { label: '裝修(純工程)', value: '室內裝修(純工程)' },
                          { label: '客製化(設計+工程)', value: '客製化(設計+工程)' },
                        ]}
                        name={name}
                        value={value}
                        onChange={onChange}
                        errors={errors}
                      />
                    </FormWrapper>
                  )}
                />
                {/* 案件類型 */}
                <Controller
                  name="type"
                  control={control}
                  render={({ field: { ref, value, name, onChange } }) => (
                    <FormWrapper title="案件類型" isRequired full>
                      <div className='flex'>
                        <RadioGroup
                          ref={ref}
                          options={[
                            { label: '毛胚屋', value: '毛胚屋' },
                            { label: '預售屋', value: '預售屋' },
                            { label: '新成屋', value: '新成屋' },
                            { label: '中古屋', value: '中古屋' },
                            { label: '商業空間', value: '商業空間' },
                            { label: '辦公空間', value: '辦公空間' },
                            { label: '其他', value: '其他' },
                          ]}
                          name={name}
                          value={value}
                          onChange={onChange}
                          errors={errors}
                        />
                        {/* 案件類型 - 其他說明 */}
                        {watch('type') === '其他' && (
                          <Input id="typeRemark" placeholder="其他說明" {...register('typeRemark')} errors={errors} className='pl-2 w-48' />
                        )}
                      </div>
                    </FormWrapper>
                  )}
                />
                {/* 案件類型 - 預售屋 */}
                {watch('type') === '預售屋' && (
                  <FormWrapper title="交屋日期">
                    <Datepicker format="mm/dd/yyyy" />
                    <Datepicker
                      id="handoverDay"
                      placeholder="交屋日期"
                      {...register('handoverDay')}
                      errors={errors}
                      value={formatDate(watch('handoverDay'))}
                    />
                  </FormWrapper>
                )}
                {/* 預算範圍 */}
                <Controller
                  name="budgetRange"
                  control={control}
                  render={({ field: { ref, value, name, onChange } }) => (
                    <FormWrapper title="預算" isRequired full>
                      <RadioGroup
                        ref={ref}
                        options={[
                          { label: '100萬以內', value: '100萬以內' },
                          { label: '100萬-200萬', value: '100萬-200萬' },
                          { label: '200萬-300萬', value: '200萬-300萬' },
                          { label: '300萬-400萬', value: '300萬-400萬' },
                          { label: '500萬以上', value: '500萬以上' },
                        ]}
                        name={name}
                        value={value}
                        onChange={onChange}
                        errors={errors}
                      />
                    </FormWrapper>
                  )}
                />
                {/* 室內坪數 */}
                <FormWrapper title="室內坪數" isRequired>
                  <Input id="sqm" placeholder="室內坪數" {...register('sqm')} errors={errors} />
                </FormWrapper>
                {/* 希望風格 */}
                <FormWrapper title="希望風格" isRequired>
                  <Input id="style" placeholder="希望風格" {...register('style')} errors={errors} />
                </FormWrapper>
                {/* 施作項目 */}
                <FormWrapper title="施作項目" full>
                  <Textarea id="items" placeholder="請輸入施作項目..." rows={4} {...register('items')} />
                </FormWrapper>
                {/* 其他需求 */}
                <FormWrapper title="其他需求" full>
                  <Textarea id="remark" placeholder="請輸入其他需求..." rows={4} {...register('remark')} />
                </FormWrapper>
              </div>
              <div className="flex justify-center my-6">
                <Button color="blue" className="" type="submit">
                  送出
                </Button>
              </div>
            </form>
          </div>
          <Modal
            show={openModal}
            size="sm"
            onClose={() => {
              setOpenModal(false);
              window.location.reload();
            }}
            popup
          >
            <Modal.Header></Modal.Header>
            <Modal.Body>
              <div className="text-center">
                {modalMsg.iconType === -1 && <HiOutlineXCircle className="mx-auto mb-4 h-14 w-14 text-red-500" />}
                {modalMsg.iconType === 1 && <HiOutlineCheckCircle className="mx-auto mb-4 h-14 w-14 text-green-400" />}
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{modalMsg.msg}</h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="gray"
                    onClick={() => {
                      setOpenModal(false);
                      window.location.reload();
                    }}
                  >
                    關閉
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
