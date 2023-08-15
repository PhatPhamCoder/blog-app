function Footer() {
  return (
    <div className="flex">
      <p className="mx-auto text-sm font-bold">
        &copy; {new Date().getFullYear()}. Powered by IT Team
      </p>
    </div>
  );
}

export default Footer;
