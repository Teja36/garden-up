const Footer = () => {
  return (
    <footer className="w-screen bg-slate-200 mt-4 flex flex-wrap items-start justify-between p-4 gap-4">
      <div className="p-2">
        <h6 className="uppercase font-bold">About Us</h6>
        <ul className="flex flex-col gap-2 mt-2">
          <li className="text-sm">Our Story</li>
          <li className="text-sm">Locate Stores</li>
          <li className="text-sm"></li>
        </ul>
      </div>
      <div className="p-2">
        <h6 className="uppercase font-bold">Customer Care</h6>
        <ul className="flex flex-col gap-2 mt-2">
          <li className="text-sm">Track Order</li>
          <li className="text-sm">Shipping Policy</li>
          <li className="text-sm">Terms and Conditions</li>
          <li className="text-sm">Privacy Policy</li>
          <li className="text-sm">FAQs</li>
          <li className="text-sm">Refund Policy</li>
        </ul>
      </div>
      <div className="p-2">
        <h6 className="uppercase font-bold">Get in Touch</h6>
        <ul className="flex flex-col gap-2 mt-2">
          <li className="text-sm">Call: +91-1234567890</li>
          <li className="text-sm">Email: support@garden-up.com</li>
        </ul>
      </div>
      <div className="p-2">
        <h6 className="uppercase font-bold">Sign up for our newsletter</h6>
        <p className="text-sm max-w-[10rem] mt-2 text-left">
          For plant care tips, our featured plant of the week, exclusive offers
          and discounts
        </p>
        <input
          className="rounded-md p-2 mt-2 max-w-sm"
          type="email"
          placeholder="Enter email address"
        />
      </div>
    </footer>
  );
};

export default Footer;
