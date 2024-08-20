import { Copyright, Form, Infos } from './Footer/index';

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center bg-[#F0F0F0]">
      <div className="flex flex-col w-[90%] justify-between items-center gap-5 p-1">
        <Form />
        <Infos />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
