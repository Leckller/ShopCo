import Visa from '../../../assets/Pay/Visa.svg';
import PayPal from '../../../assets/Pay/Paypal.svg';
import Mastercard from '../../../assets/Pay/Mastercard.svg';
import GooglePay from '../../../assets/Pay/GooglePay.svg';
import ApplePay from '../../../assets/Pay/ApplePay.svg';

function Copyright() {
  return (
    <section
      className="border-t-2 w-full flex flex-row
       justify-center md:justify-between pt-2 pb-2 flex-wrap gap-5 md:gap-0
      "
    >
      <small>
        Shop.co © 2000-2023, All Rights Reserved
      </small>
      <article
        className="flex flex-row flex-grow gap-5 justify-center
       md:justify-end flex-wrap"
      >
        {[Visa, Mastercard, PayPal, ApplePay, GooglePay].map((pay) => (
          <img src={ pay } key={ pay.toString() } alt={ pay.toString() } />
        ))}
      </article>
    </section>
  );
}

export default Copyright;
