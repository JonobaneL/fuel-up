const Footer = () => {
  return (
    <footer className="w-full px-20 py-7 bg-secondary">
      <div className="max-w-[1440px] mx-auto flex gap-12">
        <img src="/logo.svg" alt="logo" className="h-7" />
        <div className="text-sm space-y-2">
          <h3 className=" text-primary font-semibold uppercase">Інформація</h3>
          <p>Оплата і доставка</p>
          <p>Обмін та повернення</p>
        </div>
        <div className="text-sm space-y-2">
          <h3 className="text-primary font-semibold uppercase">Контакти</h3>
          <p>+38 067 345 23 56</p>
          <p>exampleMail@gmail.com</p>
          <img src="/instagram.svg" alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
