import React from 'react'

export const ProjectCard = ({Nooftest,Testtitle}) => {
    return (
        <div className="bg-secondary h-40 w-44 border rounded-lg space-y-6 p-2">
            <div className="flex justify-between items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="6" fill="white" />
                        <path d="M30.7223 18.44C28.8504 16.5703 26.5156 15.2311 23.9565 14.5594C21.3975 13.8877 18.706 13.9075 16.1571 14.6168C16.3493 13.5466 16.2271 12.4436 15.8052 11.4414C15.3834 10.4393 14.6801 9.58091 13.7804 8.9703C12.8807 8.3597 11.8232 8.02306 10.7361 8.00114C9.64902 7.97923 8.57887 8.27299 7.6553 8.84684C6.73173 9.42069 5.99436 10.25 5.53249 11.2344C5.07062 12.2187 4.90406 13.3159 5.053 14.393C5.20193 15.4701 5.65997 16.4809 6.37163 17.3029C7.08329 18.125 8.01804 18.7231 9.06268 19.0248C6.59697 21.7584 5.23643 25.3115 5.24582 28.9928C5.24582 29.1037 5.28985 29.21 5.36824 29.2884C5.44662 29.3667 5.55293 29.4108 5.66378 29.4108H9.78927C9.90012 29.4108 10.0064 29.3667 10.0848 29.2884C10.1632 29.21 10.2072 29.1037 10.2072 28.9928C10.2225 26.3606 11.2788 23.8414 13.1455 21.9855C15.0122 20.1296 17.5374 19.0879 20.1697 19.0879C22.802 19.0879 25.3272 20.1296 27.1939 21.9855C29.0606 23.8414 30.1169 26.3606 30.1322 28.9928C30.1322 29.1037 30.1762 29.21 30.2546 29.2884C30.333 29.3667 30.4393 29.4108 30.5501 29.4108H34.6756C34.7865 29.4108 34.8928 29.3667 34.9712 29.2884C35.0495 29.21 35.0936 29.1037 35.0936 28.9928C35.0989 27.0322 34.7153 25.09 33.965 23.2786C33.2147 21.4672 32.1125 19.8226 30.7223 18.44ZM20.5878 18.2033V14.9114C22.7769 14.9734 24.9208 15.5482 26.8473 16.5896L25.2022 19.4391C23.7765 18.6855 22.1993 18.2631 20.5878 18.2033ZM19.7519 14.9117V18.2033C18.1403 18.2635 16.5631 18.6864 15.1376 19.4405L14.2545 17.911C14.9956 17.2833 15.5623 16.4749 15.8996 15.5641C17.1471 15.1683 18.4437 14.9488 19.7519 14.9117ZM5.83599 13.6224C5.83599 12.6757 6.11671 11.7503 6.64266 10.9631C7.16862 10.176 7.91617 9.56248 8.7908 9.2002C9.66542 8.83791 10.6278 8.74312 11.5563 8.92781C12.4848 9.1125 13.3377 9.56838 14.0071 10.2378C14.6765 10.9072 15.1324 11.7601 15.3171 12.6886C15.5018 13.6171 15.407 14.5795 15.0447 15.4541C14.6824 16.3287 14.0689 17.0763 13.2818 17.6022C12.4946 18.1282 11.5692 18.4089 10.6225 18.4089C9.35352 18.4074 8.13692 17.9026 7.23959 17.0053C6.34227 16.108 5.83749 14.8914 5.83599 13.6224ZM9.38033 28.5749H6.08777C6.14758 26.3849 6.7202 24.2395 7.75963 22.3111L10.6175 23.9605C9.86334 25.386 9.44046 26.9633 9.38033 28.5749ZM11.0382 23.2373L8.18127 21.5881C8.71178 20.7333 9.33186 19.9375 10.031 19.2141C10.2278 19.2348 10.4256 19.2452 10.6235 19.2452C11.6666 19.2465 12.6893 18.9557 13.5757 18.4059L14.4153 19.8604C13.0531 20.722 11.8993 21.8754 11.0372 23.2373H11.0382ZM25.9261 19.8601L27.5702 17.0102C29.4297 18.1638 30.9975 19.7316 32.1511 21.5911L29.3012 23.2363C28.4396 21.8749 27.2865 20.7217 25.9251 19.8601H25.9261ZM30.9601 28.5749C30.8999 26.9633 30.4771 25.386 29.7229 23.9605L32.5734 22.3151C33.6156 24.2414 34.191 26.3855 34.2533 28.5749H30.9601ZM23.3845 24.5788L20.8547 27.1086C20.4537 26.9626 20.0166 26.9483 19.6069 27.0676C19.1973 27.187 18.8363 27.4339 18.5765 27.7724C18.3168 28.111 18.1717 28.5235 18.1624 28.9502C18.1532 29.3768 18.2802 29.7952 18.525 30.1448C18.7698 30.4943 19.1197 30.7566 19.5238 30.8937C19.9279 31.0308 20.3652 31.0354 20.7721 30.907C21.179 30.7785 21.5344 30.5237 21.7866 30.1794C22.0388 29.8352 22.1746 29.4195 22.1744 28.9928C22.1742 28.877 22.164 28.7615 22.144 28.6474L24.7986 25.9928C24.9861 25.8053 25.0914 25.551 25.0914 25.2858C25.0914 25.0206 24.9861 24.7663 24.7986 24.5788C24.6111 24.3913 24.3567 24.2859 24.0916 24.2859C23.8264 24.2859 23.572 24.3913 23.3845 24.5788ZM20.1699 30.1628C19.9387 30.1628 19.7128 30.0942 19.5206 29.9658C19.3284 29.8374 19.1786 29.6549 19.0902 29.4414C19.0017 29.2278 18.9786 28.9929 19.0237 28.7662C19.0688 28.5395 19.1801 28.3312 19.3435 28.1678C19.507 28.0044 19.7152 27.8931 19.9419 27.848C20.1686 27.8029 20.4035 27.826 20.6171 27.9145C20.8306 28.0029 21.0131 28.1527 21.1415 28.3449C21.27 28.5371 21.3385 28.763 21.3385 28.9942C21.3377 29.3037 21.2143 29.6004 20.9953 29.8192C20.7762 30.0379 20.4794 30.161 20.1699 30.1614V30.1628ZM24.2074 25.4017L21.7919 27.8172C21.7275 27.7283 21.6559 27.6449 21.5779 27.5677L23.9757 25.1699C24.0068 25.14 24.0484 25.1233 24.0916 25.1233C24.1348 25.1233 24.1763 25.14 24.2074 25.1699C24.2374 25.2011 24.2542 25.2427 24.2542 25.286C24.2542 25.3292 24.2374 25.3705 24.2074 25.4017ZM13.9947 12.7961C14.2032 12.5837 14.3194 12.2974 14.318 11.9997C14.3166 11.702 14.1977 11.4169 13.9872 11.2064C13.7766 10.9959 13.4915 10.877 13.1938 10.8756C12.8961 10.8741 12.6099 10.9903 12.3974 11.1989L9.98388 13.6137L8.84701 12.4768C8.63451 12.2683 8.34828 12.1521 8.05057 12.1535C7.75286 12.1549 7.46774 12.2738 7.25723 12.4843C7.04671 12.6949 6.92782 12.98 6.92641 13.2777C6.92501 13.5754 7.0412 13.8616 7.24971 14.0741L9.24859 16.0733C9.44364 16.2678 9.70781 16.3769 9.98321 16.3769C10.2586 16.3769 10.5228 16.2678 10.7178 16.0733L13.9947 12.7961ZM9.84043 15.4812L7.84222 13.4823C7.78869 13.4269 7.75904 13.3528 7.75966 13.2758C7.76028 13.1988 7.79113 13.1251 7.84555 13.0707C7.89998 13.0162 7.97362 12.9853 8.05062 12.9846C8.12761 12.9839 8.20179 13.0135 8.25718 13.067L9.68929 14.4991C9.72808 14.5379 9.77413 14.5687 9.82482 14.5897C9.87551 14.6107 9.92984 14.6215 9.98471 14.6215C10.0396 14.6215 10.0939 14.6107 10.1446 14.5897C10.1953 14.5687 10.2413 14.5379 10.2801 14.4991L12.9885 11.7907C13.0442 11.7386 13.1178 11.7102 13.194 11.7115C13.2702 11.7128 13.3429 11.7436 13.3968 11.7974C13.4506 11.8513 13.4814 11.924 13.4827 12.0002C13.484 12.0764 13.4556 12.15 13.4035 12.2056L10.1267 15.4825C10.0884 15.52 10.0368 15.5408 9.98327 15.5406C9.92969 15.5403 9.87837 15.519 9.84043 15.4812Z" fill="#505050" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M13.9998 5.94973C13.9925 5.75639 13.9163 5.53289 13.7892 5.39194L9.12256 0.253435C8.85008 -0.0833508 8.32589 -0.0765992 8.01955 0.226875C7.71321 0.530347 7.68806 1.06778 7.99647 1.36903L11.4154 5.13839H0.777771C0.348234 5.13839 0 5.50166 0 5.94973C0 6.39784 0.348234 6.76108 0.777771 6.76108H11.4154L7.99647 10.5304C7.68811 10.8317 7.71337 11.3714 8.01981 11.6749C8.32615 11.9784 8.85778 11.9797 9.12271 11.646L13.7894 6.50753C13.9313 6.35019 13.9978 6.16666 13.9998 5.94973Z" fill="#8F8F8F" />
                    </svg>
                </div>

            </div>
            <div className=''>
           
                {Nooftest}
               </div>
               <div className=''>
                {Testtitle}
             
               </div>
        </div>
    )
}
