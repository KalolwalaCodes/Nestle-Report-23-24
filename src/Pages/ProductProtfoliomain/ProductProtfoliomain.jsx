import React from "react";
import ProductHero from "../../Components/Producthero/ProductHero";
import GradientCard01 from "../../Components/GradientCard/GradientCard01";

const ProductPortfolioMain = () => {
  return (
    <div className="wrapper-main-product-portfolio">
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/12.jpg"}
          heading={"Nutrition in a nutshell"}
          img2={"./ProductPortfolio/Artboard 8@3x.webp"}
          url
        />
      </div>
      <div className="chairman-message-wrapper">
        <h3 className="bold-heading-text text-black font-bold">
          Milk Products and Nutrition
        </h3>
        <img className="w-full" src="./ProductPortfolio/Artboard 9@3x.webp" alt="" />
        <p className="big-medium-font mt-6">
          The Milk Products and Nutrition business registered strong growth,
          despite fluctuations in commodity prices, which were addressed through
          cost optimization and value chain efficiencies. The performance of
          Milk Products and Nutrition was further bolstered by e-commerce.
        </p>
        <div className="flex sm:flex-col md:flex-row gap-6 mt-4 justify-between p-4" style={{background:"rgb(246 245 244)"}}>
          <p className="normal-paragraph-container sm:w-full md:w-[70%]">
            The Ready-To-Drink (RTD) portfolio saw strong growth in both in-home
            and out-of-home channels. The 'Thoda Aur Macha' campaign celebrating
            Gen Z heroes, contributed to NESCAFÉ RTD's increased visibility.
            <br />
            <br />
            Nestlé a+ Masala Millet, made with bajra and barley, was launched in
            Delhi- NCR and Mumbai and subsequently expanded to other cities
            across key geographies. MILO for teenagers was introduced in Tamil
            Nadu, Andhra Pradesh, Telangana, and Kerala.
            <GradientCard01
              bigData={"40.7%"}
              smallData={"Contribution to total sales"}
            />
          </p>
          <img
            className="sm:w-full md:w-[30%]"
            src={"./ProductPortfolio/Artboard 10@3x.webp"}
            alt=""
          />
        </div>
        <div className="flex sm:flex-col md:flex-row gap-6 mt-4 justify-between p-4" style={{background:"rgb(246 245 244)"}}>
          <p className="normal-paragraph-container sm:w-full md:w-[70%]">
            MILKMAID's engagement on digital platforms increased, and the
            website, milkmaid.in, achieved a remarkable milestone by attracting
            over 7.2 million visits, demonstrating the growing demand for
            homemade desserts in India.
            <br />
            <GradientCard01
              bigData={"38 million"}
              smallData={"tins of MILKMAID sold"}
            />
          </p>
          <img
            className="sm:w-full md:w-[30%]"
            src={"./ProductPortfolio/Artboard 11@3x.webp"}
            alt=""
          />
        </div>
        <div className="flex sm:flex-col md:flex-row gap-6 mt-4 justify-between p-4" style={{background:"rgb(246 245 244)"}}>
          <p className="normal-paragraph-container sm:w-full md:w-[70%]">
            Your Company is committed to providing high-quality, innovative,
            science-based nutrition while expanding the reach of its toddler
            range of products. In line with its commitment to deliver ‘Good
            Food, Good Life’, your Company launched GERBER Multigrain Puffs for
            toddlers, which are crafted with a blend of oats, wheat, and rice.
            These are fortified with immuno-nutrients and are a source of fiber.
            Taking a step towards a more sustainable future, GERBER benches made
            from recycled plastic waste were installed in parks.
            <br />
          </p>
          <img
            className="sm:w-full md:w-[30%]"
            src={"./ProductPortfolio/Artboard 12@3x.webp"}
            alt=""
          />
        </div>
      </div>
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p22.webp"}
          heading={"Empowering healthier lives through nutrition"}
          img2={"./ProductPortfolio/Artboard 8@3x.webp"}
          url
        />
      </div>
      <div className="chairman-message-wrapper">
        <h3 className="bold-heading-text text-black font-bold">
          Nestlé Health Science
        </h3>
        <img className="w-full" src="./ProductPortfolio/Artboard 13@3x.webp" alt="" />
        <p className="big-medium-font mt-6">
          The Health Science business consisting of a portfolio of science-based
          medical and consumer healthcare nutrition products, launched three
          innovations, customised to improve health and quality of life.
        </p>
        <p className="normal-paragraph-container ">
          Thicken Up Clear was launched for patients with dysphagia. It has been
          clinically proven to improve swallowing safety and efficacy. The
          product was scientifically designed and manufactured by leveraging a
          unique technology at Osthofen, Germany, exclusively for Nestlé Health
          Science.
          <br />
          Resource Fiber Choice, a unique and effective gut health solution,
          that has proven to help relieve constipation and improve gut health
          was introduced in the Indian market. Resource Fiber Choice was
          recognized as the 'Best Health & Wellness Product of the Year' at the
          prestigious CIMS Medical Nutrition & Wellness Awards, 2023.
          <br />
          The core brand PEPTAMEN, for patients in critical care, continued to
          experience accelerated growth momentum.
          <br />
          Recognizing the unique needs of active millennials in India, your
          Company launched Resource Activ. Its new edge formula has high-
          quality protein, calcium and vitamin D, and hyaluronate (hyaluronic
          acid) for healthy skin. Nestlé India and Dr. Reddy’s Laboratories
          Limited entered into a definitive agreement to form a joint venture
          (JV) to bring innovative nutraceutical brands to consumers in India
          and other agreed territories. The JV Company is expected to become
          operational in Q2 of FY 2024-25.
          <br />
          The partnership will bring together the global range of nutritional
          health solutions as well as vitamin, minerals, herbals and supplements
          of Nestlé Health Science with the strong and established commercial
          strengths of Dr. Reddy’s in India.
        </p>
      </div>
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p24.jpg"}
          heading={"Wholesome goodness in every serve"}
          img2={"./ProductPortfolio/Artboard 8@3x.webp"}
          url
          overlay
        />
      </div>
      <div className="chairman-message-wrapper">
        <h3 className="bold-heading-text text-black font-bold">
          Prepared Dishes and Cooking Aids
        </h3>
        <img className="w-full" src="./ProductPortfolio/Artboard 15@3x.webp" alt="" />
        <p className="big-medium-font mt-6">
          The Prepared Dishes and Cooking Aids business recorded a strong growth
          momentum. This was aided by a healthy balance of product mix, pricing
          and volume growth in MAGGI Noodles and MAGGI Masala-ae-Magic,
          supported by strong consumer engagement and market presence with media
          campaigns and attractive consumer activations.
        </p>
        <p className="normal-paragraph-container ">
          Exciting new products like MAGGI Oats Noodles with Millet Magic were
          launched to cater to the growing consumer demand for taste and
          balance. The introduction of MAGGI Korean Noodles in Veg and Chicken
          barbeque flavours resonated well with consumers.
          <br />
          Recognizing the unique needs of rural consumers, your Company launched
          MAGGI Teekha Masala and MAGGI Chatpata Masala noodle variants at an
          affordable price of H 10. Your Company also introduced MAGGI Pasta
          Masala, a seasoning to prepare pasta at home.
          <br />
          In a first, the ‘Swad Ke Saath, Quality Ka Bhi Bharosa Pao. Khao Toh
          MAGGI Noodles Khao’ campaign featured real consumer voices from rural
          India to raise awareness about fake Maggi products circulated in the
          market, ensuring consumer protection and brand trust.
          <br />
          Your Company worked on renewing the recipe for MAGGI Tomato Ketchup
          and it now has 22% less sugar.
          <br />
          Launched on the World Environment Day, the 'Yellow + Blue = Green'
          campaign educated consumers on the proper disposal of plastic
          packaging, emphasizing the importance of recycling. By encouraging
          responsible waste segregation (yellow for plastic, blue for dry
          waste), MAGGI empowered consumers to contribute to a greener future.
          <br />
          In a first-of-its-kind move for the brand, MAGGI introduced
          compostable forks in its cuppa noodles. This initiative reduces
          plastic waste generated by single-use utensils, demonstrating MAGGI's
          commitment to sustainable packaging solutions. The focus on consumer
          delight, strong execution, and commitment to sustainability
          contributed to the sale of over six billion servings of MAGGI during
          the year, making India the largest Nestlé market for MAGGI worldwide.
          <GradientCard01
            bigData={"6 billion+"}
            smallData={"serves of MAGGI sold"}
          />
          <GradientCard01
            bigData={"30.4%"}
            smallData={"Contribution to total sales"}
          />
        </p>
      </div>
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p24.jpg"}
          heading={"Beginning every day on a good note"}
          img2={"./ProductPortfolio/Artboard 8@3x.webp"}
          url
          overlay
        />
      </div>
      <div className="chairman-message-wrapper">
        <h3 className="bold-heading-text text-black font-bold">
          Breakfast Cereals
        </h3>
        <img className="w-full" src="./ProductPortfolio/Artboard 18@3x.webp" alt="" />
        <p className="big-medium-font mt-6">
          Your Company’s Breakfast Cereals business continued to drive
          penetration with a focus on innovation and exciting new offerings. It
          unveiled two distinct cereals that were designed to cater to a broader
          array of breakfast preferences.
        </p>
        <div className="flex sm:flex-col md:flex-row gap-6 mt-4 justify-between">
          <p className="normal-paragraph-container sm:w-full md:w-[70%]">
            KOKO KRUNCH incorporated local grains like Jowar, blending the
            delightful chocolatey taste of KOKO KRUNCH with the added benefits
            of millets. <br />
            <br />
            For those seeking a more indulgent breakfast option, MUNCH Breakfast
            Cereals is a perfect solution. Crafted with a blend of whole grain
            wheat flour, rice, and corn, this cereal offers a satisfying crunch
            and a delicious way to start the day.
          </p>
          <img
            className="sm:w-full md:w-[30%]"
            src={"./ProductPortfolio/Artboard 19@3x.webp"}
            alt=""
          />
        </div>
      </div>
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p28.jpg"}
          heading={"Unlocking the power of nutrition for pets"}
          img2={"./ProductPortfolio/Artboard 20@3x.webp"}
          url
          overlay
        />
      </div>
      <div className="chairman-message-wrapper">
        <h3 className="bold-heading-text text-black font-bold">Pet Care</h3>
        <img className="w-full" src="./ProductPortfolio/Artboard 21@3x.webp" alt="" />
        <p className="big-medium-font mt-6">
          The Purina portfolio continued to demonstrate its unwavering
          commitment to enriching the lives of pets. Innovative new products
          coupled with a strong focus on e-commerce, enabled the portfolio to
          reach more pet families.
        </p>
        <br />
        <p className="normal-paragraph-container ">
          The portfolio offers a comprehensive array of options catering to both
          canine and feline companions. For dogs, brands such as Purina
          Supercoat and Purina Pro Plan offer complete and balanced dry dog
          food, made with high quality ingredients and no added artificial
          colours or flavours. 
          <br />
          Catering to our feline friends, Purina Friskies continued to be a
          popular dry food choice, while the newly launched Purina Felix wet
          food offered a delectable balance of taste and essential nutrients.
          <br />
          Purina Felix has captured the hearts and taste buds of cats with its
          unique and patented grill technology. This innovative approach
          delivers a taste that cats crave, while offering pet parents a
          convenient wet food option. The positive feedback was instrumental in
          driving trial purchases, paving the way to build a loyal feline
          following.
          <br /> Recognising the ever-evolving needs of pet owners, your Company
          expanded the reach of the portfolio through e-commerce channels. This
          was proven highly successful, making it easier for pet parents to
          access the food their furry companions love, conveniently delivered
          right to their doorsteps.
        </p>
      </div>
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p30.jpg"}
          heading={"Creating joy with every bite"}
          img2={""}
          url
          overlay
        />
      </div>
      <div className="chairman-message-wrapper">
        <h3 className="bold-heading-text text-black font-bold">
          Confectionery
        </h3>
        <img className="w-full" src="./ProductPortfolio/Artboard 23@3x.webp" alt="" />
        <p className="big-medium-font mt-6">
          Confectionery was one of the main drivers of growth for your Company.
        </p>
        <p className="normal-paragraph-container ">
          The growth was fueled by the launch of new products, increased media
          exposure, a more extensive and expanding distribution network, and
          innovative brand activations which were all instrumental in the
          portfolio's success.
          <br />
          KITKAT emerged as the star performer, by not only delivering strong
          growth but making Nestlé India the second largest market for the brand
          globally.
          <GradientCard01
            bigData={"16.5%"}
            smallData={"Contribution to total sales"}
          />
          <br />
          This success can be attributed to innovative launches like KITKAT
          Butterscotch and a premium range with Dark, Rich, and Caramel options.
          <br /> MUNCH also performed well in different regions through
          innovations such as MUNCH Max Brownie and MUNCH Fruity to the existing
          range. Other new launches across the portfolio included MILKYBAR
          caramel, and POLO watermelon. These launches were supported by
          targeted advertising, digital and on-ground initiatives.
          <br />
          Beyond product innovation, creative marketing campaigns played a
          crucial role. KITKAT's 'Fingers Crossed for the Win' campaign
          resonated with audiences during the 2023 Cricket World Cup, while
          MUNCH leveraged the IPL season with its 'Play in the Gully and Meet
          Your Favorite Stars' initiative. This interactive campaign not only
          boosted brand awareness but also generated excitement by offering fans
          a unique opportunity to meet their cricket heroes.
          <br />
          These campaigns, along with influencer partnerships and a focus on
          video platforms, significantly
          <br />
          enhanced brand visibility and consumer engagement. Your Company
          continued to demonstrate its commitment to sustainability. Two years
          ago the entire confectionery portfolio transitioned into recyclable
          packaging (Design for recycling - D4R) and remains dedicated to using
          recyclable materials. In another initiative, KITKAT benches from
          recycled pastic, were placed in colleges across the country.
          <GradientCard01
            bigData={"4,200 million"}
            smallData={"KITKAT fingers sold"}
          />
        </p>
      </div>
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p32.webp"}
          heading={"Brewing goodness in every sip"}
          img2={""}
          url
          overlay
        />
      </div>
      <div className="chairman-message-wrapper">
        <h3 className="bold-heading-text text-black font-bold">
          Powdered and Liquid Beverages
        </h3>
        <img className="w-full" src="./ProductPortfolio/Artboard 24@3x.webp" alt="" />
        <p className="big-medium-font mt-6">
          The Powdered and Liquid Beverages business recorded robust performance
          by staying focused on recruitment and creating more occasions for
          coffee consumption.
        </p>
        <p className="normal-paragraph-container ">
          The in-home portfolio of NESCAFÉ, comprising NESCAFÉ Classic, NESCAFÉ
          Sunrise, and NESCAFÉ GOLD, delivered strong double- digit growth. This
          resulted in the highest-ever yearly increase in household penetration
          and market share in 2023, further strengthening NESCAFÉ's market
          leadership. NESCAFÉ has introduced its coffee to over 30 million
          Indian households in the past seven years.
          <br />
          KITKAT emerged as the star performer, by not only delivering strong
          growth but making Nestlé India the second largest market for the brand
          globally.
          <br />
          NESCAFÉ Classic led category recruitment with the highest penetration
          gains in a year by driving relevance through core thematic campaigns
          and expanding its availability. The brand increased consumption
          occasions with a focus on cold coffee during summer and monsoon.
          NESCAFÉ continued its innovation journey with the launch of NESCAFÉ
          ALL IN 1 FRAPPE, which provides consumers a convenient way of making
          cold coffee.
          <br />
          NESCAFÉ GOLD delivered strong growth. It catered to the growing demand
          for premium coffee experiences. This growth underscores the brand's
          commitment to delivering a superior coffee experience that resonates
          with consumers. NESCAFÉ Sunrise emerged as one of the top 10 brands
          for Nestlé India, leading to significant market share gains in the
          coffee business in the south region. A captivating new thematic
          campaign, launched across TV and digital platforms, further
          strengthened brand awareness with consumers in South India.
          <br /> 
          <GradientCard01
            bigData={"15 billion+"}
            smallData={"Cups of coffee"}
          />
          <GradientCard01
            bigData={"12.4%"}
            smallData={"Contribution to total sales"}
          />
          <br />
        </p>
      </div>
      <div className="pp-sec-01">
        <ProductHero
          img1={"./ProductPortfolio/p34.jpg"}
          heading={"Innovating for customer delight"}
          img2={""}
          url
          overlay
        />
      </div>
      <div className="chairman-message-wrapper">
        <h3 className="bold-heading-text text-black font-bold">
        Out-of-Home
        </h3>
        <div className="flex gap-8 w-100 sm:flex-col md:flex-row">
        <img src="./ProductPortfolio/Artboard 26@3x.webp" alt="" />
        <img src="./ProductPortfolio/Artboard 27@3x.webp" alt="" />
        </div>
        
        <p className="big-medium-font mt-6">
        The Out-of-Home business reported strong growth, propelled by portfolio transformation and premiumization, channel prioritization and new customer acquisition.
        </p>
        <br />
        <div className="flex sm:flex-col md:flex-row gap-8 p-4" style={{background:"rgb(246 245 244)"}}>
        <p  className="normal-paragraph-container md:w-[70%] sm:w-full ">
        This business continued to accelerate rapidly by focusing on relevant innovations and robust penetration in emerging channels. Geographical expansion beyond metros into Tier-1 towns, tapping tourist hot spots and focusing on new geographical clusters also contributed to growth.
          <br />
          The Out-of-Home business was one of the fastest growing business of your Company in India in 2023.
          <br />
          It collaborated with McDonald's India (West and South), PVR-INOX, and Krispy Kreme to co-create a menu using KITKAT and NESCAFÉ. Your Company partnered with SOCIAL and BOSS Burger outlets to test launch the MAGGI Professional plant-based range. This range has been especially developed for chefs to cater to the Indian taste palate. The launch of the plant-based range is a part of your Company’s commitment to offer more food choices to consumers.
          <br />
          Your Company continues to make rapid strides on both the food and beverages portfolios in the Out-of-Home space aided by penetration and premiumization. The rapidly growing base of NESCAFÉ machines, backed by cutting-edge solutions catered to a wide spectrum of consumer preferences by offering both
          hot and cold beverages across offices, educational institutes, and healthcare facilities.

          <br /> 
          Food solutions such as MAGGI Coconut Milk Powder continued to accelerate rapidly across HORECA segments with applications in
Thai and Coastal cuisines.


        </p>
        <img className="md:w-[30%]  sm:w-full h-[400px]" src="./ProductPortfolio/Artboard 25@3x.webp" alt="" />
        </div>
        <p className="normal-paragraph-container p-4" style={{background:"rgb(246 245 244)"}}>Your Company's ‘Retail ONE' initiative fostered entrepreneurship by setting up over 830 branded kiosks such as NESCAFÉ Corners, MAGGI Hotspots, KITKAT Break Zones in educational institutes, hospital food zones, malls and airports. These kiosks are operator funded, and created employment opportunities for more than 1,600 people. Approximately 30% of the food handlers in the kiosks
        are women.</p>
      </div>
    </div>
  );
};

export default ProductPortfolioMain;
