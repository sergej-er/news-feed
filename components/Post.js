import { Card, Divider, Image } from 'antd';

const Post = ({ article }) => {
  function handleClick() {
    window.location.href = article.url;
  }

  function formatDescription(article) {
    if (!article.description) return '';
    const regex = /(<([^>]+)>)/gi;
    let result = article.description.replace(regex, '');

    return result;
  }
  return (
    <Card
      hoverable
      cover={<Image src={article.urlToImage} fallback='/img/placeholder.jpg' />}
      hoverable={true}
      style={{ maxWidth: 500, margin: '0 25px 0 25px' }}
      onClick={handleClick}
    >
      <strong>{article.title}</strong>
      <Divider />
      <p>{formatDescription(article)}</p>
    </Card>
  );
};

export default Post;
