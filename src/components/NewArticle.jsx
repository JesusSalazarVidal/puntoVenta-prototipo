export function NewArticle({ title, text }) {
  return (
    <article className="h-[140px] border-b-2 border-gray-400 py-7 last:border-none">
      <h2 className="cursor-pointer hover:text-orange-500 text-[20px] mb-3 font-bold">
        {title}
      </h2>
      <p className="text-[15px]">
        {text}
      </p>
    </article>
  );
}

export default NewArticle;
