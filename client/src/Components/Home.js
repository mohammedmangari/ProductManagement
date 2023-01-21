import React, { useState, useEffect } from 'react';

function Home({category}) {
  
  const [products, setProducts] = useState([]);


  //http://127.0.0.1:8080/Product => Display All Products 

 /* const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/Product');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
*/


 const fetchProducts =async () =>{
      const res = await fetch(`http://127.0.0.1:8080/Product/${category}`);
      const data = await res.json();
      setProducts(data);
    }

  useEffect(() => {
      fetchProducts();
  }, [category]);


const handleDelete = async (name) => {
    const confirm = window.confirm("Are you sure you want to delete "+name+" ?");
      if (!confirm) {
        return;
      }else{
      
      try {
        const response = await fetch(`http://127.0.0.1:8080/Product/${name}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
        fetchProducts()
      } catch (error) {
        console.error('Error deleting item:', error);
      } 
    }
  }

  return (
        <>
      <section style={{backgroundColor: '#eee;'}}>
          <div>
              {products.map(product => (
                  <div key={product.id} className="row justify-content-center mb-3">
                    <div className="col-md-12 col-xl-10">
                      <div className="card shadow-0 border rounded-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                <h5>{product.name}</h5>
                              <div className="d-flex flex-row">
                                <div className="text-danger mb-1 me-2">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <span>310</span>
                              </div>
                              <div className="mt-1 mb-0 text-muted small">
                                    {product.description}
                              </div>
                            
                              <p className="text-truncate mb-4 mb-md-0">
                                {product.category}
                              </p>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                            
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">${product.price}</h4>
                                <span className="text-danger"><s>${parseInt(product.price)+30}</s></span>
                              </div>
                              <h6 className="text-success">Free shipping</h6>
                              <div className="d-flex flex-column mt-4">
                                
                                <button className="btn btn-primary btn-sm" type="button">Details</button>
                                <button className="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => handleDelete(product.name)}>Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>))}
          </div>
      </section>
        </>
  );
}

export default Home;


