import Head from "next/head";
import SearchHeader from "../components/Header/SearchHeader";

type Props = {};

export default function Search({}: Props) {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchHeader />
      {/* Search Result */}
    </div>
  );
}
