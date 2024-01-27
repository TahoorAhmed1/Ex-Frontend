/** @format */

function StoryCard({ story }) {
  console.log(story)
  return (
    <div
      className="border border-[#BC5F2E] flex flex-col gap-4 rounded-2xl px-6 py-3 mb-6 shadow"
      key={story?.id}
    >
      <p className="italic text-primaryBrown font-bold text-lg sm:text-2xl break_word">
        Name: <span className="text-black">{story?.name}</span>
      </p>
      <p className="italic sm:text-base text-sm font-light break_word">
        {story?.description}
      </p>
    </div>
  );
}

export default StoryCard;
