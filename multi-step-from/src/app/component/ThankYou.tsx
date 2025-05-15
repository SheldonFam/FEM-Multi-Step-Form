import Image from "next/image";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="mb-4">
        <Image
          src={"/images/icon-thank-you.svg"}
          alt="thank you"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg">
        Thanks for confirming your subscription. We hope you have fun using our
        platform. If you ever need support, feel free to reach out to us.
      </p>
    </div>
  );
}
