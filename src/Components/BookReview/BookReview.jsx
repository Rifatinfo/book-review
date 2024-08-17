const BookReview = () => {
  return (
    <div className="min-h-[calc(100vh-86px)] mt-16">
      <div className="rounded-xl bg-[#FBF4E2] mt-4 h-96 p-10">
        <div className="flex justify-center items-center">
          <p className="text-5xl font-bold">
            Recommended books
            <br />
            from you to review
          </p>
        </div>
        {/* text-field */}
        <div className="flex justify-center items-center gap-5 mt-16">
          <input
            type="text"
            placeholder="write your recommendation"
            className="input input-bordered w-full max-w-xl"
          />
          <button className="btn w-40 bg-[#B4D51E] text-white">submit</button>
        </div>
      </div>
      {/* testimonial  */}
      <div className="flex justify-center items-center gap-7 mt-24">
        <div className="border border-[#B4D51E] relative rounded-xl shadow-xl">
         <div className="flex justify-center items-center">
         <img
            className="rounded-full h-20 w-20 absolute"
            src="https://s3-alpha-sig.figma.com/img/ff79/64c3/7649ca6fc3228124bed3212834df8aea?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qyHrt80FJfvibdb2-fV425cs-p2hE44QajFjWFowRMfN6T2vizjCfTUNqkO7zONkuqAhPRoGthiymIP8P4Y6MERdpO~n9b16z7h3~7iULUNKA8jGtTbOaqn2MhP7HQqjpsuppsIl4pAsgxS6YgdRha0a8Nx1r9wZae1jXA6oKdtVvzsa2Urusl3g1oyXfoRiMwz4sR1OZ8693k4A-alFcN-cH~aiQXdELK9fZhqpf8dyhFF90Qh1ktutAZCbZRGjnUBR2OyZeJsflJX-RrP3KI1TvKrabRGtvg6Yi~Kq14vsnFfjPWOyRMZ3z4GmqpZ0mZpWY9lpsgmw84dOkeybeA__"
            alt=""
          />
         </div>
          <div className="flex flex-col items-center justify-center mt-14 space-y-5 p-7">
            <p>Eka Ardilah</p>
            <p className="text-center">
              I feel very helpful with all the books provided, soI do my job
              easily and happily
            </p>
          </div>
        </div>
         {/* 2 */}
         <div className="border border-[#B4D51E]  relative rounded-xl shadow-xl">
         <div className="flex justify-center items-center">
         <img
            className="rounded-full h-20 w-20 absolute"
            src="https://s3-alpha-sig.figma.com/img/cbe3/46be/9b643bcdc2bda9bf5fa82b6bc8253d56?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTxPVUGBCSy1~HNEFcf~e~oRGwsI6WSr0rQprruzJU3~8VHB4cWc73T295SftHZaZXd7lTKaFPChV1iCfowe-Sb8MnbquJyPxCMZxbFmN85CllnKIucacs-hvTq2DFlj9SWljYrFH1hiAV7~U9Zmrrg8QoHS64H11w-zFiAG5ewi5JuycEZaVlIi1EmSHAvIPTzdZHgrCH7q7LQ3yiV4Dd0syH8~PO6SFtCqmxOqPR-Hxp1i4HGwhTRJT7onz20Ll97oQhKEWqMDWG4I1AwNR3j2Am3uz5a2vpEs1B3CSOB1Yi0xa8l8Z3-1nnKze7A0ush2Dw0Ca9m1kJ3m0ihINg__"
            alt=""
          />
         </div>
          <div className="flex flex-col items-center justify-center mt-14 space-y-5 p-7">
            <p>Eka Ardilah</p>
            <p className="text-center">
              I feel very helpful with all the books provided, soI do my job
              easily and happily
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="border border-[#B4D51E]  relative rounded-xl shadow-xl">
         <div className="flex justify-center items-center">
         <img
            className="rounded-full h-20 w-20 absolute"
            src="https://s3-alpha-sig.figma.com/img/6d5e/23ed/2ceb25fc651a28b89b152ec79a22f975?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E1yWWbMEymi4rXh~M5oCU6yU0Fm6jrv7rBADKjJ3C3~RK-E6fmZohlICWgwq~nHZdEvGczktq1dZTiQdHbi4bUQDFlr~L9Y6ko13jL1D8ltb7hs2VRbX0Cc8rVW6rlC6-fbbfBAuZoHIt7-TXPHjcRhYPPvEWrdApRzyQUTepwLnTBojMF-5Bpc6jf65~rX2XSDNvFMfQ1fCzifHQpVMFuai~~H-cf9AHOLeUvQO09TEbSVbksmNL9YDbd9v8qe8VvbJfXjv8AnjKA2fqsXtFVQbJBX~o1LaC2HuUqDiiGnaWKd0xiWBF8JB7jy~uiwU-rdDSH3thcfT4ZN8c7LaDA__"
            alt=""
          />
         </div>
          <div className="flex flex-col items-center justify-center mt-14 space-y-5 p-7">
            <p>Hazar Hamzah</p>
            <p className="text-center">
            I feel very helpful with all the books provided, soI do my job
            easily and happily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReview;
