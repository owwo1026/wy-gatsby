import React, { useState, useEffect } from 'react';
import { Button, Textarea, Modal } from 'flowbite-react';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Layout from '@/components/layout';
import Eyebrow from '@/components/eyebrow';

const IndexPage = () => {

  return (
    <Layout pageTitle="服務流程">
      <div id="#contact">
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 lg:py-12 md:py-8 py-4 mb-56">
            <Eyebrow label="SERVICE / 服務流程" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-18">
              <div div className="flex flex-col gap-10">
                <div className="flex flex-col items-center">
                  <p>維域設計室內裝修有限公司</p>
                  <p>電話: 0972078750</p>
                  <p>信箱: 0972078750</p>
                  <p>地址: 台中市北屯區文心路三段447號4F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
