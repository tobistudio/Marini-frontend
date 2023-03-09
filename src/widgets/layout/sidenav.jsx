import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import menuIcon from "../../../public/img/menuIcon.svg";
import {
  Typography
} from "@material-tailwind/react/components/Typography";
import { useNavigate } from "react-router-dom";
import userpt from "../../../public/img/sidebar/userpt.png";
import logout from "../../../public/img/sidebar/logout.svg";
import menu from '../../../public/img/burger-2.png';
import { NavbarCtx } from "@/App";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { signOut } from '../../redux/actions/actions';
import bubble from '../../../public/img/bubble.png'
export function Sidenav({ brandImg, brandName, routes, role, lay }) {

  const { navbar, setNavbar } = useContext(NavbarCtx);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  return (
    <>
      {navbar.isMobile ?
        <div onClick={() => setNavbar(prev => ({ ...prev, mobileExpand: !prev.mobileExpand }))} className="block p-4">
          <img src={menu} />
        </div> : null}
      {!navbar.isMobile || (navbar.isMobile && navbar.mobileExpand) ?

        <aside
          className={`fixed flex flex-col inset-0 z-50 h-screen ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'w-[350px]' : 'w-[100px]'} rounded-r-xl bg-[#280559] transition-transform duration-300`}
        >
          <div className="mb-4 flex">
            <button
              className="ml-7 mr-2 pt-4"
              onClick={() => navbar.isMobile ? setNavbar(prev => ({ ...prev, mobileExpand: !prev.mobileExpand })) : setNavbar(prev => ({ ...prev, desktopExpand: !prev.desktopExpand }))}
            >
              <img
                src={menuIcon}
                className="mx-5 ml-0 h-[18px] w-[27px]"
              />
            </button>
            <div className="flex items-center justify-center pt-4">
              <img src={brandImg} className={`h-[45px] w-[192px] ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'block' : 'hidden'}`} />
            </div>
          </div>

          <div className="py-5 mx-0 flex-1 mb-6 overflow-hidden">
            <p className={`pl-6 pb-4 font-semibold text-white ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'block' : 'hidden'}`}>
              {brandName}
            </p>
            <div className="flex flex-col gap-6 justify-between h-full w-full overflow-y-scroll pr-[17px] box-content" >
              {routes.map(({ layout, title, pages }, key) => layout === lay && (
                <ul key={key} className="mb-4 flex flex-col items-center relative gap-1">
                  {title && (
                    <li className="mx-3.5 mt-4 mb-2">
                      <Typography
                        variant="small"
                        className="font-black uppercase opacity-75"
                      >
                        {title}
                      </Typography>
                    </li>
                  )}
                  {pages
                    .filter(({ id }) => role.includes(id))
                    .map(({ id, icon1, icon2, name, path }) => (
                      <li className="relative w-full px-6" key={name}>
                        <NavLink to={`/${layout}${path}`}>
                          {({ isActive }) => (
                            <div className="flex items-center">
                              <div
                                className={`${isActive ? "" : "hidden"
                                  } absolute left-0 h-8 w-[3px] rounded-sm bg-white`}
                              />
                              <div
                                className={`bg-${isActive ? "[#E6EFF3]" : ""
                                  } flex w-full items-center ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'justify-start' : 'justify-center'} rounded-2xl py-5 px-7 capitalize `}
                                style={{
                                  backgroundColor: isActive ? "#E6EFF3" : "",
                                }}
                              >
                                {isActive ? icon2 : icon1}
                                <div
                                  className={`mx-4 text-base capitalize ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'flex' : 'hidden'} font-bold`}
                                  style={{ color: isActive ? '#280559' : '#E6EFF3' }}
                                >
                                  {name}
                                </div>
                              </div>
                            </div>
                          )}
                        </NavLink>  
                        {id === "leads" && !navbar.isMobile && !navbar.desktopExpand ? (<img width={12} className="absolute bottom-4 right-7" src={bubble} />) : id === "leads" ? (
                          <span className="font-500 absolute right-10 -translate-y-1/2 top-1/2 h-[28px] w-[40px] rounded-[20px] bg-[#DB0D4B] p-1 text-center text-[14px] text-white">
                            10
                          </span>
                        ) : <></>}
                      </li>
                    ))}
                </ul>
              ))}
              <div className="flex justify-around py-5">
                <div className="flex flex-row">
                    <img src={userpt} onClick={() => Navigate('/dashboard/profile')} style={{ cursor: "pointer", width: 50}}/>
                    <div className={`left-5 mx-4 ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'block' : 'hidden'}`}>
                      <p className={` text-white ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'block' : 'hidden'}`}>USER</p>
                      <p className={`text-[#AAABAF] ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'block' : 'hidden'}`}>
                        {localStorage.name}
                      </p>
                    </div>
                  <Link to="/" className="flex items-center center" onClick={() => dispatch(signOut({ name: localStorage.name, role: localStorage.access }))}>
                    <img className={`ml-6  ${(!navbar.isMobile && navbar.desktopExpand) || (navbar.isMobile && navbar.mobileExpand) ? 'block' : 'hidden'}`} src={logout} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside> : null}
    </>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo.svg",
  brandName: "MENU",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
