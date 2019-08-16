export interface ArticleCardProps {
    title: string,
    url: string,
    media: string,
    publicationDate: string,
}

export default ({ media, publicationDate, title, url }: ArticleCardProps) => (
    <article>
        <a href={url}>
            <img src={media} alt={title} />
            <h2>{title}</h2>
            <h3>{publicationDate}</h3>
        </a>
    </article>
);