import { Link } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.svg";
import { useState } from "react";
import { navlinks } from "../constants/index.js";

// eslint-disable-next-line react/prop-types
function Nav({ page }) {
  const [hamburgerClasses, setHamburgerClasses] = useState("hidden");
  function showHamburger() {
    if (hamburgerClasses === "hidden") {
      setHamburgerClasses(
        "p-4 mt-4 rounded-2xl w-fit float-right md:hidden border border-black rounded-md w-fit px-4 py-2",
      );
    } else {
      setHamburgerClasses("hidden");
    }
  }
  return (
    <header className="py-6 z-10 w-full px-4">
      <nav className="flex justify-between items-center mx-auto">
        <div className="ml-5 cursor-pointer">
          <Link to="/">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
             <svg width="80px" height="50px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M364.988585 703.54344l375.672177 7.093517 29.511008 106.106165 63.063098 95.268161 60.381403 59.022017H477.360278L347.007631 794.436853l17.980954-90.893413z" fill="#178E3B" /><path d="M482.451792 851.469225a12.926514 12.926514 0 0 1-8.811285-3.460252c-51.582475-47.776198-44.365378-141.549035-44.031711-145.515967a12.975946 12.975946 0 0 1 25.865386 2.162658c-0.111222 1.408817-6.302602 85.270503 35.838328 124.309563A12.975946 12.975946 0 0 1 482.451792 851.469225zM618.476781 826.889076a12.938872 12.938872 0 0 1-9.688706-4.337673c-44.488958-49.951213-35.331648-109.986591-34.923832-112.4582a12.975946 12.975946 0 0 1 25.618225 4.139945c-0.111222 0.753841-7.315962 50.66798 28.670662 91.054067a12.975946 12.975946 0 0 1-9.676349 21.614219z" fill="#2FA65B" /><path d="M958.112902 1023.999876h-0.321309l-123.19734-1.482965a25.951892 25.951892 0 0 1-15.954234-5.734132l-34.157634-27.509006-2.063793 11.12224a25.951892 25.951892 0 0 1-25.828312 21.218761l-88.89141-1.112224a25.951892 25.951892 0 0 1-15.97895-5.74649l-40.31194-32.501656-5.672342 18.747153a25.951892 25.951892 0 0 1-25.2722 18.450559l-73.950534-1.235804a25.951892 25.951892 0 0 1-12.110883-3.22545c-77.386071-42.684684-131.872687-111.963878-157.552702-200.336249-19.2044-66.103177-15.608209-119.638223-15.447555-121.887387a25.951892 25.951892 0 0 1 25.890102-24.07347h410.880244a25.951892 25.951892 0 0 1 25.951892 25.951892c0 179.797181 184.295509 279.452447 186.161573 280.441091a25.951892 25.951892 0 0 1-12.172673 48.913137z m-113.891733-53.275527l30.437863 0.370741a495.860333 495.860333 0 0 1-35.072129-32.526371c-30.89511-31.636592-55.611198-65.8313-73.419139-101.607837a319.418361 319.418361 0 0 1-32.884755-116.326267H373.35498A352.710931 352.710931 0 0 0 387.171274 801.913469c21.676009 73.03604 64.261828 128.325928 126.79353 164.547355l47.739124 0.778557 11.122239-36.864045a25.951892 25.951892 0 0 1 41.139928-12.704069l63.322617 51.051079 58.082807 0.704409 6.006009-32.341001a25.951892 25.951892 0 0 1 41.782547-15.484629z" fill="#203529" /><path d="M534.231996 807.412799a12.95123 12.95123 0 0 1-10.133596-4.869069c-28.658304-35.776537-20.304266-91.560747-19.933525-93.921134a12.975946 12.975946 0 0 1 25.642941 4.004006c-0.074148 0.519038-6.88343 46.960567 14.545418 73.691016a12.975946 12.975946 0 0 1-10.121238 21.095181zM685.741614 807.412799a12.95123 12.95123 0 0 1-10.133596-4.869069c-28.658304-35.776537-20.304266-91.560747-19.933524-93.921134a12.975946 12.975946 0 0 1 25.618225 4.004006c-0.098864 0.617902-6.858714 46.960567 14.545417 73.691016a12.975946 12.975946 0 0 1-10.121238 21.082823z" fill="#2FA65B" /><path d="M758.17211 720.634615H347.798546a25.951892 25.951892 0 0 1-25.951893-25.951893v-77.13891a25.951892 25.951892 0 0 1 25.951893-25.951892h410.373564a25.951892 25.951892 0 0 1 25.951892 25.951892v77.13891a25.951892 25.951892 0 0 1-25.951892 25.951893z m-384.421672-51.903785h358.46978v-25.235126H373.750438z" fill="#203529" /><path d="M631.860543 639.022093a25.951892 25.951892 0 0 1-25.951892-25.951893 53.905788 53.905788 0 1 0-107.823933 0 25.951892 25.951892 0 1 1-51.903785 0 105.809572 105.809572 0 1 1 211.631502 0 25.951892 25.951892 0 0 1-25.951892 25.951893z" fill="#203529" /><path d="M605.822144 572.177433a25.951892 25.951892 0 0 1-25.951892-25.951892l1.025718-466.404935a27.916821 27.916821 0 0 0-55.833643 0L524.03661 546.225541a25.951892 25.951892 0 0 1-25.951892 25.951892 25.951892 25.951892 0 0 1-25.951893-25.951892l1.025718-466.404935a79.820606 79.820606 0 0 1 159.641211 0L631.774037 546.225541a25.951892 25.951892 0 0 1-25.951893 25.951892z" fill="#203529" /><path d="M552.979149 98.765487m-14.08817 0a14.08817 14.08817 0 1 0 28.17634 0 14.08817 14.08817 0 1 0-28.17634 0Z" fill="#203529" /><path d="M320.326614 1019.773425H65.862132a25.951892 25.951892 0 0 1-25.951892-25.951892 153.239744 153.239744 0 1 1 306.368266 0 25.951892 25.951892 0 0 1-25.951892 25.951892z m-225.151202-51.903784h195.837922a101.33596 101.33596 0 0 0-195.825564 0zM237.638942 783.981948a12.963588 12.963588 0 0 1-4.152303-0.679693 220.405713 220.405713 0 0 1-100.248452-68.772514c-21.280552-25.544077-38.309936-56.772854-50.445535-92.80891-20.576143-60.83865-20.452563-114.040029-20.440205-116.276835a12.975946 12.975946 0 0 1 12.975947-12.88944h0.086506a12.975946 12.975946 0 0 1 12.88944 13.050094c0 0.50668 0 51.693698 19.315622 108.47891 25.383422 74.481931 70.514999 123.13555 134.158925 144.589114a12.975946 12.975946 0 0 1-4.139945 25.309274zM259.117223 617.519096a12.914156 12.914156 0 0 1-6.673344-1.853706c-80.883397-48.591829-70.88574-166.574074-70.44085-171.579082a12.975946 12.975946 0 0 1 25.840669 2.385102c-0.098864 1.062792-8.873076 106.798215 57.946868 146.937142a12.975946 12.975946 0 0 1-6.69806 24.098186zM193.310639 377.575316a12.975946 12.975946 0 0 1-12.975946-12.864724c0-1.903139-0.111222-46.960567 26.59451-81.402435a12.975946 12.975946 0 0 1 20.514353 15.892444c-21.243477 27.422499-21.156971 64.904447-21.156971 65.287546a12.975946 12.975946 0 0 1-12.864724 13.087169z" fill="#203529" /></svg>
              <span className="ml-3 text-xl">WasteZero</span>
            </div>
          </Link>
        </div>
        <ul
          className="flex gap-16 text-xl font-sans max-md:hidden"
          id="nav-items"
        >
          {navlinks.map((obj) => {
            if (obj.pageName === page) {
              return obj.links.map((obj, index) => {
                if (obj.link[0] === "#") {
                  return (
                    <li key={index} className="cursor-pointer">
                      <a href={obj.link}>{obj.title}</a>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="cursor-pointer">
                      <Link to={obj.link}>{obj.title}</Link>
                    </li>
                  );
                }
              });
            }
          })}
        </ul>
        <div className="flex gap-5 mr-5 max-md:hidden text-xl cursor-pointer">
        {page === "home" && <Link to="/signup" className="underline font-bold">Get Started</Link>}
          {page === "home" && <Link to="/signin">Login</Link>}
          {page !== "home" && <Link to="/">Logout</Link>}
        </div>
        <div className="hidden max-md:block">
          <button aria-controls="nav-items" aria-expanded="false">
            <img
              src={hamburger}
              alt="hamburger"
              width={40}
              onClick={() => showHamburger()}
            />
          </button>
        </div>
      </nav>
      <div className={hamburgerClasses}>
        <ul className="text-xl font-sans text-right">
          {navlinks.map((obj) => {
            if (obj.pageName === page) {
              return obj.links.map((obj, index) => (
                <li key={index} className="cursor-pointer py-1">
                  <a href={obj.link}>{obj.title}</a>
                </li>
              ));
            }
          })}
          
          <li className="cursor-pointer">
            <Link to={"/signin"}>Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;