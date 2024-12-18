import MediaCard from "./MediaCard";
interface AllContentProps {
  mediaItems: any[];
}

function AllContent({ mediaItems }: AllContentProps) {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-y-8 gap-x-10 items-center">
        {mediaItems.map((item, index) => (
            <MediaCard
            key={index}
            title={item.title}
            year={item.year}
            runtime={item.runtime}
            genres={item.genres}
            imageUrl={item.poster}
            feelsTotalCount={item.feels_total_count}
            ratings={item.top_three_emotions}
          />
        ))}
      </div>
    </section>
  );
}

export default AllContent;
