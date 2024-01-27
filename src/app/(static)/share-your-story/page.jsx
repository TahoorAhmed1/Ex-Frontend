import Stories from "@/components/shareYourStory/Stories";
import StoryForm from "@/components/shareYourStory/StoryForm";

export const metadata = {
  title: "Share Your Story",
  description: "Expedition Orange | Share Your Story",
};

function page() {
  return (
    <div className=" container md:my-32 my-24 ">
      <div className="flex flex-col justify-center items-center xl:gap-24 gap-10">
      
        <StoryForm />
        <Stories />
      </div>
    </div>
  );
}

export default page;
