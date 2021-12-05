function Footer() {
  return (
    <footer className="flex flex-col w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      <div className="flex flex-col w-full items-center px-8 py-3 lg:flex-row lg:justify-between">
        <div className="flex justify-center space-x-8 whitespace-nowrap">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
}

export default Footer;
