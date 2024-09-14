import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classes from './ProductPage.module.css';
import ProductPageNav from '../../components/ProductPageNav/ProductPageNav';
import useData from "../../../hooks/useData/useData";
import ProductImagesList from '../../components/ProductImagesList/ProductImagesList';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import CommentConstructor from '../../components/CommentConstructor/CommentConstructor';
import LoadingFullscreen from '../../components/LoadingHandler/LoadingFullscreen';
import CommentsList from '../../components/CommentsList/CommentsList';

const ProductPage = () => {
  const { id } = useParams();
  const { result, isLoaded, hasError } = useData(`http://localhost:3000/products?id=${id}`);
  const [currImage, setCurrImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && (!result || result.length === 0)) {
      navigate('/error');
    }
  }, [isLoaded, result]);

  if (!isLoaded) {
    return <LoadingFullscreen hasError={hasError} />;
  }

  if (hasError || !result || result.length === 0) {
    return <LoadingFullscreen hasError={true} />;
  }

  const productInfo = result[0];

  return (
    <div className={classes.productMainDiv}>
      <ProductPageNav productCost={productInfo.price} pageName={productInfo.name} />
      <div className={classes.productPhotosAndDescr}>
        <div className={classes.productPhotoDiv}>
          <img
            className={classes.productPhoto}
            src={`/${productInfo.images[currImage]}`}
            alt={productInfo.name}
          />
          <ProductImagesList
            imageNumberChanger={setCurrImage}
            imageActiveId={currImage}
            imageArr={productInfo.images}
          />
        </div>
        <ProductDescription
          name={productInfo.name}
          price={productInfo.price}
          description={productInfo.description}
        />
      </div>
      <div className={classes.commentsAndMoreProducts}>
        <div className={classes.comments}>
          <CommentConstructor />
          <CommentsList postId={id} />
        </div>
        <div className={classes.moreProducts}></div>
      </div>
    </div>
  );
};

export default ProductPage;