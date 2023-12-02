import { FunctionComponent } from "react";

const ErrorPage: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-scale-white w-full h-[1577px] overflow-hidden text-left text-sm text-gray-scale-white font-heading-03-heading-03-600">
      <div className="absolute top-[395px] left-[654px] w-[612px] h-[571.03px] text-center">
        <div className="absolute top-[526.03px] left-[225px] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-3.5 px-8 text-left">
          <div className="relative leading-[120%] font-semibold">
            Back to Home
          </div>
        </div>
        <div className="absolute top-[454.03px] left-[0px] text-base leading-[150%] text-gray-scale-gray-500 inline-block w-[612px] mix-blend-normal">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </div>
        <div className="absolute top-[386.03px] left-[85px] text-21xl leading-[120%] font-semibold text-gray-scale-gray-900 mix-blend-normal">
          Oops! page not found
        </div>
        <img
          className="absolute top-[0px] left-[17.9px] w-[582.72px] h-[354.03px] overflow-hidden"
          alt=""
          src="/illustration.svg"
        />
      </div>
      <div className="absolute top-[195px] left-[0px] w-[1920px] h-[120px] bg-[url('/public/breadcrumbs@3x.png')] bg-cover bg-no-repeat bg-[top] text-base text-gray-scale-gray-500">
        <div className="absolute top-[calc(50%_-_12px)] left-[300px] flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/home1-1.svg"
          />
          <img
            className="relative w-[5.08px] h-[9.17px]"
            alt=""
            src="/group.svg"
          />
          <div className="relative leading-[150%] hidden">Home</div>
          <img
            className="relative w-[8.17px] h-[4.08px] hidden"
            alt=""
            src="/vector.svg"
          />
          <div className="relative leading-[150%] hidden">Home</div>
          <img
            className="relative w-[8.17px] h-[4.08px] hidden"
            alt=""
            src="/vector.svg"
          />
          <div className="relative leading-[150%] hidden">Home</div>
          <img
            className="relative w-[8.17px] h-[4.08px] hidden"
            alt=""
            src="/vector.svg"
          />
          <div className="relative leading-[150%] hidden">Pages</div>
          <img
            className="relative w-[8.17px] h-[4.08px] hidden"
            alt=""
            src="/vector.svg"
          />
          <div className="relative leading-[150%] text-branding-success">
            404 Error Page
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-scale-white flex flex-col items-center justify-start text-xs text-gray-scale-gray-300">
        <div className="bg-gray-scale-gray-800 shadow-[0px_1px_0px_#e5e5e5] w-[1920px] flex flex-row items-center justify-between py-3 px-[300px] box-border">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img className="relative w-4 h-[19px]" alt="" src="/map-pin.svg" />
            <div className="relative leading-[130%]">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[20px] text-center">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative leading-[130%]">Eng</div>
              <img
                className="relative w-2 h-[4.5px]"
                alt=""
                src="/group1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative leading-[130%]">USD</div>
              <img
                className="relative w-2 h-[4.5px]"
                alt=""
                src="/group1.svg"
              />
            </div>
            <div className="relative box-border w-px h-4 opacity-[0.52] border-r-[1px] border-solid border-gray-scale-gray-300" />
            <div className="flex flex-row items-start justify-start gap-[4px] text-left">
              <div className="relative leading-[130%]">Sign In</div>
              <div className="relative leading-[130%]">/</div>
              <div className="relative leading-[130%]">Sign Up</div>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-scale-white shadow-[0px_-1px_0px_#e5e5e5_inset] w-[1920px] h-[93px] text-13xl text-gren-gray-scale-900">
          <div className="absolute top-[27.5px] left-[300px] flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/plant-1.svg"
            />
            <div className="relative tracking-[-0.03em] leading-[38px] font-medium">
              Ecobazar
            </div>
          </div>
          <div className="absolute top-[24px] left-[711px] rounded-md flex flex-row items-center justify-start text-mini text-gray-scale-gray-500 border-[1px] border-solid border-gray-scale-gray-100">
            <div className="w-[400px] flex flex-row items-center justify-start py-3 pr-[18px] pl-4 box-border gap-[8px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
              <div className="relative leading-[21px] inline-block w-[400px] shrink-0">
                Search
              </div>
            </div>
            <div className="rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-branding-success flex flex-row items-center justify-center py-3.5 px-6 text-sm text-gray-scale-white">
              <div className="relative leading-[120%] font-semibold">
                Search
              </div>
            </div>
          </div>
          <div className="absolute top-[29.5px] left-[1429px] flex flex-row items-center justify-start gap-[16px] text-center text-3xs text-gray-scale-white">
            <img className="relative w-8 h-8" alt="" src="/heart.svg" />
            <div className="relative box-border w-px h-[25px] border-r-[1px] border-solid border-gray-scale-gray-200" />
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="relative w-[34px] h-[34px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[34px] h-[34px]"
                  alt=""
                  src="/bag.svg"
                />
                <div className="absolute top-[-3px] left-[17px] rounded-2xl bg-branding-success-dark box-border w-5 h-5 overflow-hidden border-[1px] border-solid border-gray-scale-white">
                  <div className="absolute top-[calc(50%_-_6.5px)] left-[calc(50%_-_4px)] leading-[10px] font-medium">
                    2
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[7px] text-left text-2xs text-gray-scale-gray-700">
                <div className="relative leading-[120%]">Shopping cart:</div>
                <div className="relative text-sm leading-[100%] font-medium text-gray-scale-gray-900">
                  $57.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1920px] flex flex-row items-center justify-between py-4 px-[300px] box-border text-sm text-gray-scale-gray-600">
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[4px] text-branding-success">
              <div className="relative leading-[150%] font-medium">Home</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">Shop</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">Pages</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">Blog</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">
                About Us
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium">
                Contact Us
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-gray-scale-gray-900">
            <img
              className="relative w-7 h-7 overflow-hidden shrink-0"
              alt=""
              src="/phonecall-1.svg"
            />
            <div className="relative leading-[150%] font-medium">
              (219) 555-0114
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1047px] left-[0px] flex flex-col items-start justify-start text-5xl text-gray-scale-gray-900">
        <div className="relative w-[1920px] h-[162px]">
          <div className="absolute h-full w-full top-[100%] right-[0%] bottom-[-100%] left-[0%] bg-whitesmoke" />
          <div className="absolute h-[50.62%] w-[23.33%] top-[24.69%] right-[61.04%] bottom-[24.69%] left-[15.63%] flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%] font-semibold">
              Subcribe our Newsletter
            </div>
            <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-[448px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </div>
          </div>
          <div className="absolute h-[32.1%] w-[27.92%] top-[33.95%] right-[27.29%] bottom-[33.95%] left-[44.79%] text-base text-gray-scale-gray-500">
            <div className="absolute h-full w-[91.79%] top-[0%] right-[8.21%] bottom-[0%] left-[0%] rounded-27xl bg-gray-scale-white box-border flex flex-row items-start justify-start py-3.5 px-6 border-[1px] border-solid border-gray-scale-gray-100">
              <div className="relative leading-[150%] inline-block w-[400px] shrink-0">
                Your email address
              </div>
            </div>
            <div className="absolute h-full w-[30.22%] top-[0%] right-[0%] bottom-[0%] left-[69.78%] rounded-24xl bg-branding-success flex flex-row items-center justify-center py-4 px-10 box-border text-gray-scale-white">
              <div className="relative leading-[20px] font-semibold">
                Subscribe
              </div>
            </div>
          </div>
          <div className="absolute h-[24.69%] w-[9.58%] top-[37.65%] right-[15.63%] bottom-[37.65%] left-[74.79%] flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-10 h-10"
              alt=""
              src="/social-media.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media1.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media2.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media3.svg"
            />
          </div>
        </div>
        <div className="bg-gray-scale-gray-900 flex flex-col items-start justify-center pt-[60px] px-[300px] pb-0 gap-[60px] text-base text-gray-scale-white">
          <div className="relative w-[1248px] h-[168px]">
            <div className="absolute h-[98.81%] w-[26.92%] top-[1.19%] right-[73.08%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-[16px] text-sm">
              <div className="flex flex-row items-center justify-start gap-[8px] text-13xl">
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="/plant-11.svg"
                />
                <div className="relative tracking-[-0.03em] leading-[38px] font-medium">
                  Ecobazar
                </div>
              </div>
              <div className="relative leading-[150%] text-gray-scale-gray-500 inline-block w-[336px]">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </div>
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="bg-gray-scale-gray-900 shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[150%] font-medium">
                    (219) 555-0114
                  </div>
                </div>
                <div className="relative text-base leading-[150%] text-gray-scale-gray-500">
                  or
                </div>
                <div className="bg-gray-scale-gray-900 shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center py-1.5 px-0">
                  <div className="relative leading-[150%] font-medium">
                    Proxy@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[97.62%] w-[7.61%] top-[0%] right-[56.49%] bottom-[2.38%] left-[35.9%] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[150%] font-medium">
                My Account
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">My Account</div>
                <div className="relative leading-[150%]">Order History</div>
                <div className="relative leading-[150%] text-gray-scale-white">
                  Shoping Cart
                </div>
                <div className="relative leading-[150%]">Wishlist</div>
              </div>
            </div>
            <div className="absolute h-[97.62%] w-[10.42%] top-[0%] right-[35.74%] bottom-[2.38%] left-[53.85%] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[150%] font-medium">Helps</div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">Contact</div>
                <div className="relative leading-[150%]">Faqs</div>
                <div className="relative leading-[150%]">{`Terms & Condition`}</div>
                <div className="relative leading-[150%]">Privacy Policy</div>
              </div>
            </div>
            <div className="absolute h-[97.62%] w-[6.57%] top-[0%] right-[21.55%] bottom-[2.38%] left-[71.88%] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[150%] font-medium">Proxy</div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">About</div>
                <div className="relative leading-[150%]">Shop</div>
                <div className="relative leading-[150%]">Product</div>
                <div className="relative leading-[150%]">Track Order</div>
              </div>
            </div>
            <div className="absolute h-[97.62%] w-[10.26%] top-[0%] right-[0%] bottom-[2.38%] left-[89.74%] flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[150%] font-medium">
                Categories
              </div>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">{`Fruit & Vegetables`}</div>
                <div className="relative leading-[150%]">{`Meat & Fish`}</div>
                <div className="relative leading-[150%]">{`Bread & Bakery`}</div>
                <div className="relative leading-[150%]">{`Beauty & Health`}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-scale-gray-900 shadow-[0px_-1px_0px_#333] w-[1320px] flex flex-row items-center justify-between py-6 px-0 box-border text-sm text-gray-scale-gray-500">
            <div className="relative leading-[150%]">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-2xs text-gray-scale-white">
              <img
                className="relative w-[45px] h-[31.77px]"
                alt=""
                src="/methodapplepay.svg"
              />
              <img
                className="relative w-[45px] h-[31.77px]"
                alt=""
                src="/methodvisa.svg"
              />
              <img
                className="relative w-[45px] h-[31.77px]"
                alt=""
                src="/methoddiscover.svg"
              />
              <img
                className="relative w-[45px] h-[31.77px]"
                alt=""
                src="/methodmastercard.svg"
              />
              <div className="relative w-[65px] h-8">
                <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_32.5px)] rounded-[5.29px] bg-gray-scale-gray-900 box-border w-[65px] h-8 border-[1px] border-solid border-gray-scale-gray-800" />
                <img
                  className="absolute top-[4px] left-[5px] w-[11px] h-[11px] overflow-hidden"
                  alt=""
                  src="/lock-1.svg"
                />
                <div className="absolute top-[4px] left-[18px] leading-[100%]">
                  Secure
                </div>
                <div className="absolute top-[16px] left-[0px] text-xs leading-[100%] font-semibold text-center inline-block w-[65px]">
                  Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
