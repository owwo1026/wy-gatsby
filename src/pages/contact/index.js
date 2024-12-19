import React, { useState, useEffect } from 'react';

import Layout from '@/components/layout';
import Eyebrow from '@/components/eyebrow';

const IndexPage = () => {
  const googleMap =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9444244977494!2d120.66601811190363!3d24.173681772302707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917d3a9fab9b9%3A0x159e76a584e8c677!2zNDA25Y-w54Gj5Y-w5Lit5biC5YyX5bGv5Y2A5paH5b-D6Lev5LiJ5q61NDQ36Jmf55Kw55CD5beo5pif5aSn5qiT!5e0!3m2!1szh-TW!2sjp!4v1685546131778!5m2!1szh-TW!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  return (
    <Layout pageTitle="聯絡資訊">
      <div id="#contact">
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 lg:py-12 md:py-8 py-4 mb-56">
            <Eyebrow label="CONTACT / 聯絡資訊" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-18 ">
              {/* 聯絡資訊 */}
              <div className="flex flex-col gap-5 md:col-span-2 items-center">
                <p className="font-medium text-body-lg my-6 text-center" >維域設計室內裝修有限公司</p>
                <div className="flex flex-col gap-2">
                  <div className='flex gap-5 whitespace-nowrap'>
                    <p>電話:</p>
                    <p>0972078750</p>
                  </div>
                  <div className='flex gap-5 whitespace-nowrap'>
                    <p>信箱:</p>
                    <p>wei.yu.design22@gmail.com</p>
                  </div>
                  <div className='flex gap-5 whitespace-nowrap'>
                    <p>地址:</p>
                    <p>台中市北屯區文心路三段447號4F</p>
                  </div>
                </div>
                {/* <div className='flex justify-evenly gap-5 mt-10'>
                  <p>FB</p>
                  <p>IG</p>
                  <p>LINE</p>
                </div> */}
              </div>
              {/* Google Map */}
              <div className="md:col-span-3" dangerouslySetInnerHTML={{ __html: googleMap }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
