const Pagination = ({totalPage,handleClick}) => {
  const pages = [...Array(totalPage).keys()].map(num=>num+1);
  console.log(pages);
  return <>
  {
      pages.map((num)=>(
        <button key={num}
        onClick={()=>handleClick(num)} >{num}</button>))
      }
  
  </>;
};
export default Pagination;
