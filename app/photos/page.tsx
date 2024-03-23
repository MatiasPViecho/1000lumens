export default function PhotosPage() {
  return (
    <section className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto lg:py-16 overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="aspect-video bg-red-300"></div>
        <div className="aspect-square bg-red-300"></div>
        <div className="aspect-video bg-red-300"></div>
        <div className="aspect-video bg-red-300"></div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="aspect-video bg-red-300"></div>
        <div className="aspect-[9/16] bg-red-300"></div>
        <div className="aspect-video bg-red-300"></div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="aspect-video bg-red-300"></div>
        <div className="aspect-video bg-red-300"></div>
        <div className="aspect-[9/16] bg-red-300"></div>
      </div>
    </section>
  );
}
