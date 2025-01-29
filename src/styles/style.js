const styles = {
  boxWidth: "lg:max-w-[1240px] w-full",

  heading1:
    "font-montserrat font-bold text-white text-[32px] xs:text-[46px] leading-[40px] sm:leading-[55px] xs:leading-[70px] capitalize",
  heading2:
    "font-montserrat font-bold text-[28px] xs:text-[36px] leading-[36px] xs:leading-[54px] capitalize",
  heading3:
    "font-montserrat font-semibold text-black text-[22px] xs:text-[30px] leading-[25px] xs:leading-[35px]",
  heading4:
    "font-montserrat font-semibold text-black text-[16px] xs:text-[24px] leading-[30px] xs:leading-[40px]",
  heading5:
    "font-montserrat font-semibold text-black text-[18px] sm:text-[20px] leading-[26px] xs:leading-[30px]",
  heading6:
    "font-montserrat font-semibold text-black text-[14px] xs:text-[18px] leading-[22px] xs:leading-[26px]",
  paragraph:
    "font-montserrat text-black text-[16px] sm:text-[18px] leading-[24px] xs:leading-[26px]",

  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  flexStart: "flex items-start justify-start",

  paddingX: "px-4 sm:px-8 md:px-12 lg:px-16",
  paddingY: "py-4 sm:py-8 md:py-12 lg:py-16",
  padding: "p-4 sm:p-8 md:p-12 lg:p-16",

  marginX: "mx-4 sm:mx-8 md:mx-12 lg:mx-16",
  marginY: "my-4 sm:my-8 md:my-12 lg:my-16",
};

export const layout = {
  section: `flex flex-col md:flex-row ${styles.paddingY}`,
  sectionReversed: `flex flex-col-reverse md:flex-row ${styles.paddingY}`,
  imageContainerLeft: `flex-1 flex ${styles.flexCenter} relative md:mr-10 mr-0 md:mt-0 mt-10`,
  imageContainerRight: `flex-1 flex ${styles.flexCenter} relative md:ml-10 ml-0 md:mt-0 mt-10`,
  contentContainer: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
