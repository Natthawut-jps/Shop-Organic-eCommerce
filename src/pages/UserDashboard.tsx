import { FunctionComponent, useEffect, useState } from "react";
import { Foorter } from "./unities/Foorter";
import { Header } from "./unities/Header";
import { NavAccount } from "./unities/NavAccount";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Link } from "react-router-dom";
import instance_auth from "./unities/instance_auth";

interface userInfoType {
  id: number;
  first_name: string;
  last_name: string;
  imgURL: string;
  accept: number;
  createdAt: string;
  email: string;
}

interface addressType {
  id: number;
  first_name: string;
  last_name: string;
  company: string;
  street: string;
  county: string;
  tambon: string;
  states: string;
  zipCode: number;
  email: string;
  phone: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}
interface order_Type {
  id: number;
  referent: string;
  payment_menthod: string;
  amount_total: number;
  status: number;
  quantity: number;
  user_id: string;
  address_id: number;
  createdAt: Date;
  updatedAt: Date;
}
const UserDashboard: FunctionComponent = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>();
  const arr = [1, 2, 3, 4, 5, 6];
  const status_step = [
    "Order received",
    "Processing",
    "On the way",
    "Delivered",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const userData = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/user/user_info",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setUserInfo(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [order, setOrder] = useState<order_Type[]>([]);
  const order_get = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/order/get_order",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setOrder(
            res.data.sort(
              (a: order_Type, b: order_Type) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userData();
    order_get();
  }, []);

  return (
    <div className="relative bg-gray-scale-white w-full h-[1663px] overflow-hidden text-left text-base text-gray-scale-gray-900 font-caps-lock-small-caps-lock">
      <Header />
      <Breadcrumbs
        categoies={undefined}
        tltle={undefined}
        Detail={undefined}
        EditAndadd={undefined}
      />
      <NavAccount />
      <div className="absolute top-[347px] left-[400px] w-[984px] h-[278px] text-center text-xl">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[984px] h-[278px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[160px] left-[0px] w-[984px] rounded-lg flex flex-col items-center justify-center gap-[2px]">
          <div className="relative leading-[150%] font-medium">
            {`${userInfo?.first_name} ${userInfo?.last_name}`}
          </div>
          <div className="relative text-sm leading-[150%] text-gray-scale-gray-500 mix-blend-normal">
            Customer
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[984px] ">
          <img
            className=" relative top-[32px] left-[0] rounded-[50%] w-[120px] h-[120px] object-cover"
            alt=""
            src={`${import.meta.env.VITE_BASE_API}/img/${userInfo?.imgURL}`}
          />
          <Link
            to={"/Account/Settings"}
            className="relative z-50 no-underline hover:cursor-pointer top-[100px] left-[0px] text-base leading-[150%] font-medium text-branding-success"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="absolute top-[649px] left-[400px] w-[984px] h-[404px] text-xs text-gray-scale-gray-700">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-scale-white box-border w-[984px] h-[404px] border-[1px] border-solid border-gray-scale-gray-100" />
        <div className="absolute top-[62px] left-[0px] w-[984px] h-9">
          <div className="absolute top-[0px] left-[0px] bg-gray-scale-gray-50 w-[984px] h-9" />
          <div className="absolute top-[12px] left-[24px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Order ID
          </div>
          <div className="absolute top-[12px] left-[200px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Date
          </div>
          <div className="absolute top-[12px] left-[424px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Total
          </div>
          <div className="absolute top-[12px] left-[692px] tracking-[0.03em] leading-[100%] uppercase font-medium">
            Status
          </div>
        </div>
        <div className="absolute top-[16px] left-[24px] text-xl leading-[150%] font-medium text-gray-scale-gray-900">
          Recet Order History
        </div>
        <Link
          to={"/Account/Orders"}
          className="absolute no-underline top-[19px] left-[897px] text-base leading-[150%] font-medium text-branding-success"
        >
          View All
        </Link>
        <div className="absolute top-[110px] left-[24px] flex flex-col items-start justify-start text-sm text-gray-scale-gray-800">
          {order.map((item, index) => (
            <div
              key={index}
              className="relative w-[936px] h-[45px] odd:bg-white even:bg-slate-50"
            >
              <div className="absolute top-[12px] left-[0px] flex flex-row items-start justify-start">
                <div className="relative leading-[150%]">#</div>
                <div className="relative leading-[150%]">{item.id}</div>
              </div>
              <div className="absolute top-[12px] left-[176px] leading-[150%]">
                {`${new Date(item.createdAt).getDate()} ${
                  months[new Date(item.createdAt).getMonth()]
                }, ${new Date(item.createdAt).getFullYear()}`}
              </div>
              <div className="absolute top-[12px] left-[400px] leading-[150%]">
                <span className="font-medium">฿{item.amount_total}</span>
                <span> ({item.quantity} Products)</span>
              </div>
              <div className="absolute top-[12px] left-[668px] leading-[150%]">
                {status_step[item.status]}
              </div>
              <Link
                state={item}
                to={`/Account/Orders/Detail/${item.id}`}
                className="absolute no-underline top-[12px] left-[850px] leading-[150%] font-medium text-branding-success"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Foorter />
    </div>
  );
};

export default UserDashboard;
