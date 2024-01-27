import Donation from "@/components/donation/Donation";

export const metadata = {
  title: "Ways To Donate",
  description: "Expedition Orange | Ways To Donate",
};

function page({ params: { slug } }) {
  return <Donation slug={slug} />;
}

export default page;
