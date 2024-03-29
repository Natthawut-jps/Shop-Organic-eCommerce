import { FunctionComponent, useEffect, useState } from "react";
import { Header } from "./unities/Header";
import { Foorter } from "./unities/Foorter";
import { useLocation, useParams } from "react-router-dom";
import { Breadcrumbs } from "./unities/Breadcrumbs";
import { Alert, Rating, Snackbar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartContextProviders } from "./unities/HandleCart";
import axios from "axios";

interface datatypes {
  product: {
    id: number,
    name: string,
    price: number,
    categories: string,
    rating: number,
    imgURL: string,
    uid: number,
    shoppingHanding: number,
    createdAt: string,
    updatedAt: string,
  }
  status: string,
};
interface datatypesProduct {
  id: number,
  name: string,
  price: number,
  categories: string,
  rating: number,
  imgURL: string,
  uid: number,
  shoppingHanding: number,
  createdAt: string,
  updatedAt: boolean,
};

const ProductsDetailsDescription: FunctionComponent = () => {
  const { categoriesP, productList } = useParams();
  const [productDetail, setProductDetail] = useState<datatypesProduct[]>([]);
  const { cartItems, favoriteItem, addFavorite, removeCartItem, addTocart, removeFavoriteItem } = CartContextProviders();
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const state: datatypes = useLocation().state;

  useEffect(() => {
    const Product = async () => {
      const { PopularProduct }: { PopularProduct: datatypesProduct[] } = (await axios.get('/data/popularProduct.json')).data
      setProductDetail(PopularProduct.filter(item => item.name.replace(/\s/g, '') === productList));

    };
    Product()
    if (state?.status) {
      window.scroll(0, 0)
    }
  }, [productList]);

  return (
    <>
      {productList === productDetail.map(item => item.name.replace(/\s/g, ''))[0] &&
        <div className="relative bg-gray-scale-white w-full h-[2595px] overflow-hidden text-left text-sm text-gray-scale-gray-900 font-body-medium-body-medium-600">
          {/* header template */}
          <Header />
          <Breadcrumbs categoies={categoriesP} tltle={productList} Detail={undefined} EditAndadd={undefined} />
          <div className="absolute top-[1509px] left-[88px] w-[1320px] h-[477px] text-gray-scale-gray-700">
            <div className="absolute top-[70px] left-[0px] flex flex-row items-start justify-start gap-[24px]">
              <div className="relative rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/img/image5@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Green Apple
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium">
                        $14.99
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400">
                        $20.99
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/img/add-to-cart.svg"
                />
                <div className="absolute top-[calc(50%_-_187.5px)] left-[16px] rounded bg-branding-error flex flex-row items-center justify-center py-[3px] px-2 gap-[4px] text-gray-scale-white">
                  <div className="relative leading-[150%]">Sale</div>
                  <div className="relative leading-[150%] font-medium">50%</div>
                </div>
              </div>
              <div className="relative rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/img/image1@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Chanise Cabbage
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium">
                        $14.99
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400 hidden">
                        $20.99
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/img/add-to-cart.svg"
                />
              </div>
              <div className="relative rounded-lg bg-gray-scale-white shadow-[0px_0px_12px_rgba(32,_181,_38,_0.32)] box-border w-[312px] h-[407px] text-branding-success-dark border-[1px] border-solid border-branding-success-dark">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/img/image2@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Green Capsicum
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium">
                        $14.99
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400 hidden">
                        $20.99
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/img/add-to-cart1.svg"
                />
                <img
                  className="absolute h-[21.13%] w-[12.82%] top-[4.91%] right-[6.41%] bottom-[73.96%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/img/group-1.svg"
                />
              </div>
              <div className="relative rounded-lg bg-gray-scale-white box-border w-[312px] h-[407px] border-[1px] border-solid border-gray-scale-gray-100">
                <div className="absolute h-[76.66%] w-full top-[0%] right-[0%] bottom-[23.34%] left-[0%] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="relative w-[302px] h-[302px] object-cover"
                    alt=""
                    src="/img/image3@2x.png"
                  />
                </div>
                <div className="absolute h-[23.34%] w-full top-[76.78%] right-[0%] bottom-[-0.12%] left-[0%] flex flex-col items-start justify-center p-4 box-border gap-[6px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[280px]">
                      Ladies Finger
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium">
                        $14.99
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400 hidden">
                        $20.99
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-1.svg"
                    />
                    <img
                      className="relative w-3 h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/img/star-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute h-[9.83%] w-[12.82%] top-[83.42%] right-[6.41%] bottom-[6.76%] left-[80.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/img/add-to-cart.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[1320px] flex flex-row items-center justify-between text-13xl text-gray-scale-gray-900">
              <div className="relative leading-[120%] font-semibold">
                Related Products
              </div>
            </div>
          </div>
          <div className="absolute top-[349px] left-[-220px] flex flex-col items-center justify-start">
            <div className="relative w-[1320px] h-[558px] overflow-hidden shrink-0">
              <div className="absolute top-[2px] left-[0px] w-[648px] h-[556px]">
                <img
                  className="absolute top-[0px] left-[92px] w-[556px] h-[556px] object-cover"
                  alt=""
                  src={productDetail.map(item => item.imgURL)[0]}
                />
                <div className="absolute top-[80px] left-[0px] flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative w-20 h-[90px]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/img/product-image1@2x.png"
                    />
                  </div>
                  <div className="relative w-20 h-[90px]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/img/product-image2@2x.png"
                    />
                  </div>
                  <div className="relative w-20 h-[90px]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/img/product-image3@2x.png"
                    />
                  </div>
                  <div className="relative w-20 h-[90px]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/img/product-image4@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="absolute top-[532px] left-[28px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/img/arrowdown2-1.svg"
                />
                <img
                  className="absolute top-[20px] left-[28px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/img/arrowdown2-2.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[672px] flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[20px] text-17xl">
                  <div className="flex flex-col items-start justify-start gap-[12px]">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[120%] font-semibold">
                        {productDetail.map(item => item.name)[0]}
                      </div>
                      <div className="rounded bg-limegreen-100 flex flex-row items-center justify-center py-1 px-2 text-sm text-branding-success-dark">
                        <div className="relative leading-[150%]">In Stock</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px] text-sm text-gray-scale-gray-600">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/star-11.svg"
                        />
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/star-2.svg"
                        />
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/star-2.svg"
                        />
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/star-2.svg"
                        />
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/star-2.svg"
                        />
                        <div className="relative leading-[150%]"> 4 Review</div>
                      </div>
                      <div className="relative leading-[150%] font-medium text-gray-scale-gray-300">
                        •
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px] text-gray-scale-gray-800">
                        <div className="relative leading-[150%] font-medium">
                          SKU:
                        </div>
                        <div className="relative leading-[150%] text-gray-scale-gray-600">
                          2,51,594
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px] text-[20px] text-gray-scale-gray-300">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative [text-decoration:line-through] leading-[150%]">
                        $48.00
                      </div>
                      <div className="relative text-5xl leading-[150%] font-medium text-branding-success-dark">
                        {`฿${productDetail.map(item => item.price)[0]}`}
                      </div>
                    </div>
                    <div className="rounded-[30px] bg-tomato flex flex-row items-start justify-start py-[3px] px-2.5 text-sm text-branding-error">
                      <div className="relative leading-[150%] font-medium">
                        64% Off
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border w-[648px] h-px border-t-[1px] border-solid border-gray-scale-gray-100" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="w-[648px] flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[150%]">Brand:</div>
                      <div className="relative w-14 h-14 text-smi text-dimgray font-dancing-script">
                        <div className="absolute top-[0px] left-[0px] rounded bg-gray-scale-white box-border w-14 h-14 border-[0.8px] border-solid border-gray-scale-gray-100" />
                        <img
                          className="absolute h-[21.76%] w-[57.14%] top-[26.62%] right-[21.43%] bottom-[51.62%] left-[21.43%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/img/group-20.svg"
                        />
                        <b className="absolute top-[29px] left-[8px] leading-[100%]">
                          farmary
                        </b>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[10px]">
                      <div className="relative leading-[150%]">Share item:</div>
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <img
                          className="relative w-10 h-10"
                          alt=""
                          src="/img/social-media.svg"
                        />
                        <img
                          className="relative rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media1.svg"
                        />
                        <img
                          className="relative rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media2.svg"
                        />
                        <img
                          className="relative rounded-481xl w-10 h-10"
                          alt=""
                          src="/img/social-media3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative leading-[150%] text-gray-scale-gray-500 inline-block w-[568px]">{`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. `}</div>
                </div>
                <div className="bg-gray-scale-white shadow-[0px_-1px_0px_#e5e5e5,_0px_1px_0px_#e5e5e5] flex flex-row items-center justify-center py-[18px] px-0 gap-[12px] text-center text-base border-[1px] border-solid border-gray-scale-white">
                  {cartItems.some(check => check.pid === productDetail.map(item => item.id)[0]) ?
                    <div onClick={() => removeCartItem(productDetail.map(item => item.id)[0])} className=" cursor-pointer rounded-24xl bg-red-500 w-[447px] flex   flex-row items-center justify-center py-4 px-10 box-border gap-[16px] text-left text-gray-scale-white">
                      <div className="relative leading-[120%] font-semibold">
                        Remove
                      </div>
                      <img
                        className="relative w-[16.3px] h-[16.3px]"
                        alt=""
                        src="/img/rectangle.svg"
                      />
                      <Snackbar open={snackbar}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        autoHideDuration={1000}
                        sx={{ width: '100%' }}
                        onClose={() => setSnackbar(false)}
                      >
                        <Alert severity="success">Add to Cart successfully</Alert>
                      </Snackbar>
                    </div>
                    :
                    <div onClick={() => {
                      addTocart(state.product);
                      setSnackbar(true);
                    }}
                      className=" cursor-pointer rounded-24xl bg-branding-success w-[447px] flex   flex-row items-center justify-center py-4 px-10 box-border gap-[16px] text-left text-gray-scale-white">
                      <div className="relative leading-[120%] font-semibold">
                        Add to Cart
                      </div>
                      <img
                        className="relative w-[16.3px] h-[16.3px]"
                        alt=""
                        src="/img/rectangle.svg"
                      />
                    </div>
                  }
                  <div className="rounded-24xl bg-limegreen-200 flex flex-row items-start justify-start p-4">
                    <Rating
                      name="hover-feedback"
                      precision={1}
                      value={favoriteItem.some((item) => item.pid === state.product.id) ? 1 : 0}
                      onChange={() => {
                        addFavorite(state.product);
                        favoriteItem.some((item) => item.pid === state.product.id) && removeFavoriteItem(state.product.id)
                      }}
                      max={1}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#ff6d75',
                        },
                        '& .MuiRating-iconHover': {
                          color: '#ff3d47',
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <div className="flex flex-row items-start justify-start gap-[6px]">
                    <div className="relative leading-[150%] font-medium">
                      Category:
                    </div>
                    <div className="relative leading-[150%] text-gray-scale-gray-500">
                      Vegetables
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6px] text-gray-scale-gray-500">
                    <div className="relative leading-[150%] font-medium text-gray-scale-gray-900">
                      Tag:
                    </div>
                    <div className="relative leading-[150%]">Vegetables</div>
                    <div className="relative leading-[150%]">Healthy</div>
                    <div className="relative [text-decoration:underline] leading-[150%] text-gray-scale-gray-900">
                      Chinese
                    </div>
                    <div className="relative leading-[150%]">Cabbage</div>
                    <div className="relative leading-[150%]">Green Cabbage</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[1920px] h-[523px] text-gray-scale-gray-500">
              <div className="absolute top-[88px] left-[300px] flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[150%] inline-block w-[648px]">
                  <p className="m-0">
                    Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                    at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                    sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                    laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                    interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                    vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                    molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                    convallis. Morbi urna ipsum, placerat quis commodo quis, egestas
                    elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
                    Phasellus nec fringilla elit.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">{`Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. `}</p>
                </div>
                <div className="flex flex-col items-start justify-start gap-[14px]">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="relative w-5 h-5 overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-branding-success" />
                      <img
                        className="absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/img/check-1.svg"
                      />
                    </div>
                    <div className="relative leading-[140%] inline-block w-[620px] shrink-0">
                      100 g of fresh leaves provides.
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="relative w-5 h-5 overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-branding-success" />
                      <img
                        className="absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/img/check-1.svg"
                      />
                    </div>
                    <div className="relative leading-[140%] inline-block w-[620px] shrink-0">
                      Aliquam ac est at augue volutpat elementum.
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="relative w-5 h-5 overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-branding-success" />
                      <img
                        className="absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/img/check-1.svg"
                      />
                    </div>
                    <div className="relative leading-[140%] inline-block w-[620px] shrink-0">
                      Quisque nec enim eget sapien molestie.
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="relative w-5 h-5 overflow-hidden shrink-0">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-branding-success" />
                      <img
                        className="absolute h-[62.5%] w-[62.5%] top-[20%] right-[17.5%] bottom-[17.5%] left-[20%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/img/check-1.svg"
                      />
                    </div>
                    <div className="relative leading-[140%] inline-block w-[620px] shrink-0">
                      Proin convallis odio volutpat finibus posuere.
                    </div>
                  </div>
                </div>
                <div className="relative leading-[150%] inline-block w-[648px]">{`Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. `}</div>
              </div>
              <div className="absolute top-[0px] left-[0px] bg-gray-scale-white shadow-[0px_1px_0px_#e5e5e5] flex flex-row items-start justify-start py-0 px-[689px] text-base">
                <div className="bg-gray-scale-white shadow-[0px_-2px_0px_#20b526_inset] flex flex-row items-start justify-start p-4 text-gray-scale-gray-900">
                  <div className="relative leading-[150%] font-medium">
                    Descriptions
                  </div>
                </div>
                <div className="bg-gray-scale-white flex flex-row items-start justify-start p-4">
                  <div className="relative leading-[150%] font-medium">
                    Additional Information
                  </div>
                </div>
                <div className="bg-gray-scale-white flex flex-row items-start justify-start p-4">
                  <div className="relative leading-[150%] font-medium">
                    Customer Feedback
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[88px] left-[1084px] w-[536px] h-[300px] overflow-hidden"
                alt=""
                src="/img/video.svg"
              />
              <div className="absolute top-[408px] left-[1083px] rounded-md bg-gray-scale-white box-border w-[537px] flex flex-row items-center justify-between py-6 px-5 text-gray-scale-gray-900 border-[1px] border-solid border-gray-scale-gray-100">
                <div className="flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/img/pricetag-1.svg"
                  />
                  <div className="flex flex-col items-start justify-center gap-[6px]">
                    <div className="relative leading-[150%] font-medium">
                      64% Discount
                    </div>
                    <div className="relative text-smi leading-[150%] text-gray-scale-gray-500 inline-block w-[198px]">
                      Save your 64% money with us
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/img/leaf-1.svg"
                  />
                  <div className="flex flex-col items-start justify-center gap-[6px]">
                    <div className="relative leading-[150%] font-medium">
                      100% Organic
                    </div>
                    <div className="relative text-smi leading-[150%] text-gray-scale-gray-500 inline-block w-[189px]">
                      100% Organic Vegetables
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* foorter template */}
          <Foorter />

        </div>
      }
    </>
  )
};

export default ProductsDetailsDescription;