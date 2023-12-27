import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";
import Eyebrow from "../../components/eyebrow";
import { Button, Checkbox, Label, TextInput, Textarea, Radio } from 'flowbite-react';

const IndexPage = () => {
  const googleMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16484.188269497543!2d121.53934271146282!3d25.067470979094104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abfa9e319e81%3A0x95ad11bb0a908643!2zMTA15Y-w54Gj5Y-w5YyX5biC5p2-5bGx5Y2A5rCR5peP5p2x6LevNjg56Jmf!5e0!3m2!1szh-TW!2sjp!4v1648604969813!5m2!1szh-TW!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  const data = useStaticQuery(graphql`
    {
      portfolioCarousel: allFile(filter: { relativeDirectory: { eq: "best-portfolio" }, extension: { regex: "/(jpg)|(jpeg)|(png)|(gif)|(webp)/" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);
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
              <div className="lg:col-span-6 flex flex-col gap-8">
                <form className="flex max-w-md flex-col gap-4">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="姓名" />
                    </div>
                    <TextInput id="name" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="phone" value="電話" />
                    </div>
                    <TextInput id="phone" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="電子信箱" />
                    </div>
                    <TextInput id="email" type="email" placeholder="xxxxxx@gmail.com" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="address" value="地址" />
                    </div>
                    <TextInput id="address"/>
                  </div>
                  <fieldset className="flex max-w-md flex-col">
                    <div className="mb-2 block">
                      <Label htmlFor="address" value="房屋狀態" />
                    </div>
                    <div className="flex max-w-md flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <Radio id="housingStatus-1" name="housingStatus" value="中古屋" defaultChecked />
                        <Label htmlFor="housingStatus-1">中古屋</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="housingStatus-2" name="housingStatus" value="預售屋" />
                        <Label htmlFor="housingStatus-2">預售屋</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="housingStatus-3" name="housingStatus" value="新成屋" />
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
                        <Radio id="budgetRange-1" name="budgetRange" value="100萬以內" defaultChecked />
                        <Label htmlFor="budgetRange-1">100萬以內</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange-2" name="budgetRange" value="100萬-200萬" />
                        <Label htmlFor="budgetRange-2">100萬-200萬</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange-3" name="budgetRange" value="200萬-300萬" />
                        <Label htmlFor="budgetRange-3">200萬-300萬</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange-4" name="budgetRange" value="300萬-400萬" />
                        <Label htmlFor="budgetRange-4">300萬-400萬</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="budgetRange-5" name="budgetRange" value="500萬以上" />
                        <Label htmlFor="budgetRange-5">500萬以上</Label>
                      </div>
                    </div>
                  </fieldset>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="comment" value="需求說明" />
                    </div>
                    <Textarea id="comment" placeholder="請輸入您的需求..." rows={4} />
                  </div>
                  <div className="flex justify-center">
                  <Button color="blue" className="w-2/6" type="submit">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
