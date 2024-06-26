import React from 'react'

const BoardOfDirectorNew = () => {
    const bodArray = [
        ["Mr. Suresh Narayanan", "Chairman and Managing Director", "./Bod/MD1.png"],
        [
          "Mr. R. V. Kanoria*",
          "Independent Non-Executive Director",
          "./Bod/MD2.png",
        ],
        ["Mr. P. R. Ramesh", "Independent Non-Executive Director", "./Bod/MD3.png"],
        [
          "Ms. Anjali Bansal",
          "Independent Non-Executive Director",
          "./Bod/MD4.png",
        ],
        [
          "Ms. Alpana Parida",
          "Independent Non-Executive Director",
          "./Bod/MD5.png",
        ],
        [
          "Ms. Svetlana Boldina",
          "Executive Director – F&C and CFO",
          "./Bod/MD6.png",
        ],
        [
          "Mr. Satish Srinivasana",
          "Executive Director - Technical",
          "./Bod/MD7.png",
        ],
        [
          "Ms. Suneeta Reddy*",
          "Independent Non-Executive Director",
          "./Bod/MD8.png",
        ],
        [
          "Mr. Sidharth Kumar Birla**",
          "Independent Non-Executive Director",
          "./Bod/sidhartji.png",
        ],
        [
          "Mr. Pramod Kumar Rai",
          "Company Secretary and Compliance Officer",
          "./Bod/MD9.png",
        ],
      ];
  return (
    <div className='flex flex-wrap m-auto w-[90%] gap-10 justify-center'>
      {bodArray.map((data,key) => (
          <div key={key} className=" w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[15%] h-[380px] border border-gray-200 shadow  border-pink-200 ml-4 rounded-lg">
              <img
              style={{mixBlendMode:"multiply"}}
                className="rounded-t-lg h-[200px] w-auto m-auto"
                src={data[2]}
                alt="Noteworthy technology acquisitions 2021"

            />
            <div className="p-5">
              <h5 className="mb-2 text-xl lg:text-2xl font-bold bod-name">{data[0]}</h5>

              <p className="mb-2 bod-Desg">{data[1]}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default BoardOfDirectorNew
