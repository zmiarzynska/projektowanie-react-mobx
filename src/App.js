import './App.css';
import Product from './Product';

function App() {
  return (
    <div className='App'>
    < Product
        title='Title'
        imageUrl='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=e1aa'
        body='There is body of a product'
    />

      < Product
          title='Title'
          imageUrl='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=e1aa'
          body='There is body of a product'
      />

      < Product
          title='Title'
          imageUrl='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=e1aa'
          body='There is body of a product'
      />
    </div>
  );
}

export default App;
