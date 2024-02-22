import { ApiService } from "../apiService";

const productEndpoint = ApiService.injectEndpoints({
     endpoints : (builder) => ({
        getAllProducts : builder.query({
            query: ()=> "/products",
        }),
        getProductById : builder.query({
            query: (id)=> `/products/${id}`
        })
    }),

   
   
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productEndpoint