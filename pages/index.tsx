import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { GetServerSideProps } from "next";
import { Tab } from "@headlessui/react";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import Product from "../components/Product";
import Basket from "../components/Basket";
import dynamic from "next/dynamic";

interface Props {
  categories: Category[];
  products: Product[];
}

const Home = ({ categories, products }: Props) => {
  const showProduct = (category: number) => {
    return products
      ? products
          .filter(
            (product) => product.category._ref === categories[category]._id
          )
          .map((product) => {
            return <Product key={product._id} product={product} />;
          })
      : [];
  };

  return (
    <div>
      <Head>
        <title>app clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>

      <section className="relative z-50 -mt-[100vh] min-h-screen bg-[#1B1B1B] ">
        <div className="space-y-8 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Basket />

          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories
                ? categories.map((category) => {
                    return (
                      <Tab
                        key={category._id}
                        id={category._id}
                        className={({ selected }) =>
                          `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                            selected
                              ? "borderGradient bg-gradient-to-r from-[#ec4899] to-[#8b5cf6]  bg-[100%] no-repeat  bg-[#35383C] text-white"
                              : "border-b-2 border-[#35383C] text-[#747474] "
                          }`
                        }
                      >
                        {category.title}
                      </Tab>
                    );
                  })
                : []}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProduct(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProduct(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProduct(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProduct(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories: Category[] = await fetchCategories();
  const products: Product[] = await fetchProducts();
  return {
    props: {
      categories,
      products,
    },
  };
};
