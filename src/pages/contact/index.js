import React, { useState, useEffect  } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";
import Eyebrow from "../../components/eyebrow";
import { Button, Label, TextInput, Textarea, Radio, Modal  } from 'flowbite-react';
import { HiOutlineCheckCircle, HiOutlineXCircle   } from 'react-icons/hi';
import { isBlank } from "../../helpers/utils.js";
import axios from "axios";
import $ from 'jquery'

const IndexPage = () => {
  const [formData, setFormData] = useState({
    budgetRange: '100萬以內',
    housingStatus: '預售屋',
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [openModal, setOpenModal] = useState(false);
  const [modalMsg, setModalMsg] = useState({
    iconType: -1,
    msg: '傳送失敗，請使用其他聯絡方式，謝謝',
  });
  const googleMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9444244977494!2d120.66601811190363!3d24.173681772302707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917d3a9fab9b9%3A0x159e76a584e8c677!2zNDA25Y-w54Gj5Y-w5Lit5biC5YyX5bGv5Y2A5paH5b-D6Lev5LiJ5q61NDQ36Jmf55Kw55CD5beo5pif5aSn5qiT!5e0!3m2!1szh-TW!2sjp!4v1685546131778!5m2!1szh-TW!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  
  function changeDiv(getClass, value) {
    var getClass = $('.'+getClass);
    getClass.css({
      display: value
    });
  }

  const postNotify = async (msg) => {
    let data = {
      message: msg,
      stickerPackageId: "789",
      stickerId: "10855",
      token: "Bearer W06xfG8uS1SEjCmdRPbOFAFDcPfT97I4JXOcFaUrVxJ",
    };
    var formData = Object.keys(data)
      .map(function (keyName) {
        return (
          encodeURIComponent(keyName) + "=" + encodeURIComponent(data[keyName])
        );
      })
      .join("&");
    const url =
      "https://script.google.com/macros/s/AKfycbzyV4du500ZrIM2q7AX_COiFHHMF2u7jm5sDYEjDl7kAlquviLhH49eAlTAPvPUJD0Y/exec";
    console.log("postNotify", url, formData);
    await axios({
      method: "POST",
      timeout: 600000,
      redirect: "follow",
      withCredentials: false,
      url: `${url}`,
      data: formData,
    })
      .then((response) => {
        console.log("postNotify response", response);
        if (response.status === 200) {
          // changeDiv("contactForm", 'none');
          // changeDiv("contactResult", 'block');
          handleSuccess();
        } else {
          handleError();
        }
      })
      .catch((error) => {
        console.log("whttp error", error);
      });
  };
  const handleError = () => {
    setOpenModal(true)
    setModalMsg({
      iconType: -1,
      msg: '傳送失敗，請使用其他聯絡方式，謝謝'
    })
  };
  const handleSuccess = () => {
    setOpenModal(true)
    setModalMsg({
      iconType: 1,
      msg: '送出成功'
    })
  };
  const onFinish = async () => {
    console.log('onFinish-formData-1', formData);
    // 組裝要傳送的訊息
    var msg = "\n==== [新留言] ===="
            + `\n名稱: ${formData.name ?? ''}`
            + `\n電話: ${formData.phone ?? ''}`
            + `\n電子信箱: ${formData.email ?? ''}`
            + `\n聯絡地址: ${formData.address ?? ''}`
            + `\n房屋狀態: ${formData.housingStatus ?? ''}`
            + `\n預算: ${formData.budgetRange ?? ''}`
            + `\n需求說明: ${formData.desc ?? ''}`
            + "\n==== [END] ====";
    console.log('onFinish-formData=2', msg);
    await postNotify(msg);
  };
  const handleReload = () => {
    window.location.reload();
  }
  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    console.log('handleChangeInput', id, value)
  };
  return (
    <Layout>
      <div id="#contact">
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
            <Eyebrow label="CONTACT US / 聯絡我們" />
            <div className="grid xl:grid-cols-12 grid-cols-1 gap-18">
              <div div className="lg:col-span-6 flex flex-col gap-10">
                <div dangerouslySetInnerHTML={{ __html: googleMap }} />
                <div className="flex flex-col items-center">
                  <p>維域設計室內裝修有限公司</p>
                  <p>台中市北屯區文心路三段447號4F</p>
                  <p>TEL: 0972078750</p>
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-8 items-center">
                <form className="flex max-w-md flex-col gap-4" onSubmit={onFinish}>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="*姓名(必填)" />
                    </div>
                    <TextInput id="name" required onChange={handleChangeInput}/>
                    {errors.name && <div>{errors.name}</div>}
                    <div>{errors.name}</div>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="phone" value="電話(必填)"/>
                    </div>
                    <TextInput id="phone" required onChange={handleChangeInput}/>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="電子信箱(必填)" />
                    </div>
                    <TextInput id="email" type="email" placeholder="xxxxxx@mail.com" required onChange={handleChangeInput}/>
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="address" value="地址"/>
                    </div>
                    <TextInput id="address" onChange={handleChangeInput}/>
                  </div>
                  <fieldset className="flex max-w-md flex-col">
                    <div className="mb-2 block">
                      <Label htmlFor="address" value="房屋狀態" onChange={handleChangeInput}/>
                    </div>
                    <div className="flex max-w-md flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <Radio id="housingStatus" name="housingStatus" value="中古屋" defaultChecked onChange={handleChangeInput}/>
                        <Label htmlFor="housingStatus-1">中古屋</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="housingStatus" name="housingStatus" value="預售屋" onChange={handleChangeInput}/>
                        <Label htmlFor="housingStatus-2">預售屋</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="housingStatus" name="housingStatus" value="新成屋" onChange={handleChangeInput}/>
                        <Label htmlFor="housingStatus-3">新成屋</Label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="flex max-w-md flex-col">
                    <div className="mb-2 block">
                      <Label htmlFor="address" value="預算範圍" />
                    </div>
                    <div className="flex flex-row flex-wrap max-w-md gap-4">
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange" name="budgetRange" value="100萬以內" defaultChecked onChange={handleChangeInput}/>
                        <Label htmlFor="budgetRange-1">100萬以內</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange" name="budgetRange" value="100萬-200萬" onChange={handleChangeInput}/>
                        <Label htmlFor="budgetRange-2">100萬-200萬</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange" name="budgetRange" value="200萬-300萬" onChange={handleChangeInput}/>
                        <Label htmlFor="budgetRange-3">200萬-300萬</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange" name="budgetRange" value="300萬-400萬" onChange={handleChangeInput}/>
                        <Label htmlFor="budgetRange-4">300萬-400萬</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange" name="budgetRange" value="500萬以上" onChange={handleChangeInput}/>
                        <Label htmlFor="budgetRange-5">500萬以上</Label>
                      </div>
                    </div>
                  </fieldset>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="comment" value="需求說明" />
                    </div>
                    <Textarea id="comment" placeholder="請輸入您的需求..." rows={4} onChange={handleChangeInput}/>
                  </div>
                  <div className="flex justify-center">
                    <Button color="blue" className="w-2/6"
                    // onClick={onFinish}
                    // type="submit"
                    >送出</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Modal show={openModal} size="sm" onClose={() => setOpenModal(false)} popup>
            <Modal.Header></Modal.Header>
            <Modal.Body>
              <div className="text-center">
                {modalMsg.iconType === -1 && (<HiOutlineXCircle   className="mx-auto mb-4 h-14 w-14 text-red-500" />)}
                {modalMsg.iconType === 1 && (<HiOutlineCheckCircle  className="mx-auto mb-4 h-14 w-14 text-green-400" />)}
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {modalMsg.msg}
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="gray" onClick={() => {
                    setOpenModal(false);
                    // handleReload();
                  }}
                  // href="/contact"
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
