```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    //Instead of directly using router.push, redirect to a page that utilizes getServerSideProps
    router.push('/my-page-with-props'); 
  };
  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}
export default MyComponent;

// my-page-with-props.js
export async function getServerSideProps(context) {
  // Fetch data here
  const data = await fetchData();
  return {
    props: { data },
  };
}

function MyPageWithProps({ data }) {
  // Use the data here
  return (
    <div>Data: {data}</div>
  );
}

export default MyPageWithProps;

```