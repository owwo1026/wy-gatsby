import React, { useState, useEffect, useRef } from 'react';
import { Button, Textarea, Modal, Datepicker } from 'flowbite-react';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';

import Layout from '@/components/layout';
import Eyebrow from '@/components/eyebrow';
import FormWrapper from '@/components/wrapper/form-wrapper';
import RadioGroup from '@/components/ui/radio-group';
import Input from '@/components/ui/input';
import { DATE_FORMAT, formatDate } from '@/utils/format-date';

// 維域設計 通知中心 群組
// apps script url
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxU0jTqVGJgHUeVPi57PMI4sWkA4wJJqB34pOKXNURIxHttnaNQRus7KR-kJvW35jB/exec';

// YUI
// apps script url
// const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxvGC19r4Um0hRX1ir7D9yQA_sqfxNd_7y9Tmy7PPS6VLul3371qWOsBef-M0IMg0dK/exec';

const IndexPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalMsg, setModalMsg] = useState({
    iconType: -1,
    msg: '傳送失敗，請使用其他聯絡方式，謝謝',
  });
  const datepickerRef = useRef(null);

  console.log('datepickerRef', datepickerRef?.current);

  useEffect(() => {
    const clearButton = datepickerRef?.current?.querySelector('.datepicker-clear-button');
    console.log('clearButton', clearButton);
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        console.log('Clear button clicked!');
      });
    } else {
      console.log('Clear button not found');
    }
  }, []);

  const formSchema = z.object({
    name: z.string().min(1),
    phone: z.string().min(1),
    email: z.string().min(1).email(),
    lineId: z.string().optional(), // Line ID 非必填
    address: z.string().nullish(), // 案件地址可為空
    serviceType: z.string().min(1), // 服務需求必填
    caseType: z.string().min(1), // 服務需求必填
    housingStatus: z.string().optional(), // 房屋狀態未在表單中直接提及，視為可選
    typeRemark: z.string().optional(), // 案件類型 - 其他說明可選
    handoverDay: z.string().optional(), // 預售屋的交屋日期可選
    budgetRange: z.string().min(1), // 預算範圍必填
    sqm: z.string().min(1), // 室內坪數必填
    style: z.string().min(1), // 希望風格必填
    // items: z.string().optional(), // 施作項目可選
    remark: z.string().nullish(), // 需求說明可為空
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
    defaultValues: {},
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
        msg: '送出失敗，請使用其他聯絡方式，謝謝',
      });
    };
    const handleSuccess = () => {
      setOpenModal(true);
      setModalMsg({
        iconType: 1,
        msg: '送出成功，會盡快派專員聯絡您，謝謝！',
      });
    };

    await axios({
      method: 'POST',
      timeout: 600000,
      redirect: 'follow',
      withCredentials: false,
      url: APPS_SCRIPT_URL,
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      data: JSON.stringify({
        sendMsg: msg,
      }),
    })
      .then((response) => {
        if (response.result === 'success') {
          handleSuccess();
        } else {
          throw new Error('送出失敗');
        }
      })
      .catch((error) => {
        console.log('postNotify Error', error);
        handleError();
      });
  };

  const onFinish = async (data) => {
    console.log('onFinish data', data);
    // 組裝要傳送的訊息
    const msg =
      '==== [新留言] ====' +
      `\n姓名: ${data.name ?? ''}` +
      `\n電話: ${data.phone ?? ''}` +
      `\n電子信箱: ${data.email ?? ''}` +
      `\n案件地址: ${data.address ?? ''}` +
      `\n服務需求: ${data.serviceType ?? ''}` +
      `\n案件類型: ${data.caseType ?? ''}` +
      (data.caseType === '其他' ? `: ${data.typeRemark ?? ''}` : '') +
      (data.caseType === '預售屋' ? `\n交屋日期: ${data.handoverDay ?? ''}` : '') +
      `\n預算: ${data.budgetRange ?? ''}` +
      `\n室內坪數: ${data.sqm ?? ''}` +
      `\n希望風格: ${data.style ?? ''}` +
      // `\n施作項目: ${data.items ?? ''}` +
      `\n需求說明: ${data.remark ?? ''}` +
      '\n==== [END] ====';
    console.log('onFinish msg', msg);
    await postNotify(msg);
  };

  return (
    <Layout pageTitle="免費諮詢">
      <div id="#contact">
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 lg:py-12 md:py-8 py-4 mb-56">
            <Eyebrow label="CONSULTATION / 免費諮詢" />
            <p className="text-center">請填寫預約表單，送出後將會有專人與您聯絡，謝謝您！</p>
            <form className="sm:px-12 lg:px-36" onSubmit={handleSubmit(onFinish)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* 姓名 */}
                <FormWrapper title="姓名" isRequired>
                  <Input id="name" placeholder="姓名" {...register('name')} errors={errors} />
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
                  name="serviceType"
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
                  name="caseType"
                  control={control}
                  render={({ field: { ref, value, name, onChange } }) => (
                    <FormWrapper title="案件類型" isRequired full>
                      <div className="flex flex-col">
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
                        {watch('caseType') === '其他' && (
                          <Input id="typeRemark" placeholder="其他說明" {...register('typeRemark')} errors={errors} className="pl-2 w-48" />
                        )}
                      </div>
                    </FormWrapper>
                  )}
                />
                {/* 案件類型 - 預售屋 */}
                {watch('caseType') === '預售屋' && (
                  <FormWrapper title="交屋日期">
                    <Controller
                      name="handoverDay"
                      control={control}
                      render={({ field: { value, name, onChange } }) => (
                        <div className="relative">
                          <Datepicker
                            id="handoverDay"
                            placeholder="交屋日期"
                            errors={errors}
                            language="zn"
                            showClearButton={true}
                            value={value}
                            name={name}
                            onSelectedDateChanged={(date) => {
                              const formattedHandoverDay = formatDate(date, DATE_FORMAT.DAYJS_SLASH);
                              onChange(formattedHandoverDay);
                            }}
                            theme={{
                              popup: {
                                footer: {
                                  button: {
                                    clear:
                                      'datepicker-clear-button border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
                                  },
                                },
                              },
                              views: {
                                days: {
                                  items: {
                                    item: {
                                      selected: 'bg-primary-500 text-white hover:bg-primary-300',
                                    },
                                  },
                                },
                                months: {
                                  items: {
                                    item: {
                                      selected: 'bg-primary-500 text-white hover:bg-primary-300',
                                    },
                                  },
                                },
                                years: {
                                  items: {
                                    item: {
                                      selected: 'bg-primary-500 text-white hover:bg-primary-300',
                                    },
                                  },
                                },
                                decades: {
                                  items: {
                                    item: {
                                      selected: 'bg-primary-500 text-white hover:bg-primary-300',
                                    },
                                  },
                                },
                              },
                            }}
                          />
                          {value && (
                            <motion.button
                              type="button"
                              className="absolute bottom-3 right-0.5 z-10"
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onChange('')}
                            >
                              <HiOutlineXCircle className="h-5 w-5 text-black" />
                            </motion.button>
                          )}
                        </div>
                      )}
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
                {/* <FormWrapper title="施作項目" full>
                  <Textarea id="items" placeholder="請輸入施作項目..." rows={4} {...register('items')} />
                </FormWrapper> */}
                {/* 需求說明 */}
                <FormWrapper title="需求說明" full>
                  <Textarea id="remark" placeholder="請輸入需求說明..." rows={4} {...register('remark')} />
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
