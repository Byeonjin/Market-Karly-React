import Footer from '@/components/Footer';
import Test from '@/components/Test';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h2>Product-Detail</h2>
      <Test />
      <Footer />
    </div>
  );
};

export default ProductDetail;
