```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause a client-side navigation, which will not trigger getServerSideProps
    router.push('/my-page'); 
  };
  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}
export default MyComponent;

//getServerSideProps is called once on the server, then the page is rendered to HTML.
//Any subsequent client-side navigation will not trigger getServerSideProps again.
//This means that data fetched in getServerSideProps will not be updated
//unless the page is reloaded.
```