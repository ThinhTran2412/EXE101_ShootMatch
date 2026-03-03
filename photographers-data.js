// Photographers Data for Discovery
const photographers = [
    {
        id: 1,
        name: "Elena Vance",
        studio: "Kyoto Studio",
        location: "Hà Nội",
        price: "2.5M VNĐ",
        rating: 4.9,
        verified: true,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCRwHSThZH6h6spE0aPX_rFGudbOYE8isRp30dC4C37G2UNKnKO0oZfIzsU9EnB8AW5kkCDs2dXQwziaxtNRfJ4g6R44gVK-3sevnbn-DdKWKdoRJe0Jz-D2wKEyIPNpwlLExMjrS3SvrLnRkbvmnlKWZJC_MB8Qqr5jdulxr-atv6-OHZy7ujqvdmsYxs1psMHap76bCM_HCNRomyD2EAl71SNTGh3EcMKDKaUFcPUjNyzYkjhJpXbr-KBnkcUkedwTW3D4zggvi4",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCat6wwl1UgRCwqZZPgrbVid_qUyeUg729lIFekWfNf1U1BgCm6v8RtNmWdEauz3VnMHfQS5zBWxPYFDrnc0t0EYoN_IUfp3A5hkegwb1e7Kch0nszYc0IlKW1d2ktx7cSrYWH7Uxd8_FI6e097p8QlqwRwD5TE6OiCxGAmpeoZK6OOfE1Cf8bVbEsEdtrDGOBrUdq9i9jRqV2tdICxz7N0saDLrSFAwkqMHsg7xbWFUea8W6TTWjopD82bWvBAv3txbSRiHxlh6po",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDYw2MTuHdWwOFYczBaWFX2bl4rGuWmQVJ0ZLT5ah3-31Yfk28d73NVCytvX4EtfIZ4CcGq8iUEH6dRhxqfAZFWGxMnUK8HNt45DsQN41MqumlFdx3cPJMSohmbVZhLg3lXUNdV3ptv22WNdxnuPtslbdGnQlv8r6dRBXOE_8NxM59E0lIUK-LKmgGizbPwJyk-kAdmpy3vMlwmLKmbMvqJcE5D70UoCc0V_o-A7poevi5MN6ABpDXwGi4GwPVdlLuad5AL-BKIHsI"
        ],
        concepts: ["Portrait", "Fashion", "Editorial"],
        lens: "35mm Summilux",
        aperture: "f/1.4",
        iso: "400"
    },
    {
        id: 2,
        name: "Elara Vox",
        studio: "Berlin Atelier",
        location: "Hà Nội",
        price: "3.2M VNĐ",
        rating: 4.8,
        verified: false,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCat6wwl1UgRCwqZZPgrbVid_qUyeUg729lIFekWfNf1U1BgCm6v8RtNmWdEauz3VnMHfQS5zBWxPYFDrnc0t0EYoN_IUfp3A5hkegwb1e7Kch0nszYc0IlKW1d2ktx7cSrYWH7Uxd8_FI6e097p8QlqwRwD5TE6OiCxGAmpeoZK6OOfE1Cf8bVbEsEdtrDGOBrUdq9i9jRqV2tdICxz7N0saDLrSFAwkqMHsg7xbWFUea8W6TTWjopD82bWvBAv3txbSRiHxlh6po",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBwioxW3jjy_6uC1TYEOXInAWiG6Lfhucd-W1WaCTQ7qyl_q0i6jj1OY14vSUiNUTGgQdWORgkYjbpRWYAGKHUI7_0uZqa2XjNXoVdZ8orm0Qo0YnWiBanA2CUCj9p6ZHlbZIVDYsmOq3ggx6zDjiinNwBbZ7FYoM5MBA3SJdzYPp6n_Nr_KvjJt1LJ9er_nWvUjOy82Spo0AAss0vPPLWr2sY2SH7NFwyfrf9_400SCeU2c2F1WEl0ARHU0ohmb3hB2D4Cvv6ABdI",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD-mxIaMH8L5xRt2GG2cbN2nFaT3osYea-oRO45z1wzuSliH5f4igUzDvvj0SvRZjVyBl0543VGd-RguwcTSm21NXP27U0mTS0IsqVQu92FKNCnIgMmL63IlbaSn3APkjETrNyoa1L8MPE7GxlJUf6qV-q1cqon6jRsQMpft62rxDOaEdhFinvmLpM0wP_zuk2Vw8PXpzmCSy9OIxt0LAWiTgrdoQDf9gbwu_3BjR0gC0WNj_kGqN7iGc8NHLV0yVIBR88qa5hqUlA"
        ],
        concepts: ["Fashion", "Commercial"],
        lens: "85mm f/1.4",
        aperture: "f/1.4",
        iso: "200"
    },
    {
        id: 3,
        name: "Marcus Chen",
        studio: "Studio Noir",
        location: "TP. Hồ Chí Minh",
        price: "1.8M VNĐ",
        rating: 4.7,
        verified: true,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDYw2MTuHdWwOFYczBaWFX2bl4rGuWmQVJ0ZLT5ah3-31Yfk28d73NVCytvX4EtfIZ4CcGq8iUEH6dRhxqfAZFWGxMnUK8HNt45DsQN41MqumlFdx3cPJMSohmbVZhLg3lXUNdV3ptv22WNdxnuPtslbdGnQlv8r6dRBXOE_8NxM59E0lIUK-LKmgGizbPwJyk-kAdmpy3vMlwmLKmbMvqJcE5D70UoCc0V_o-A7poevi5MN6ABpDXwGi4GwPVdlLuad5AL-BKIHsI",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBUL_dGQMKANuzqoER1q0FgMLefLvCV-MYFGa8W8fskL4czsMRX2si-fUYd2Ync63GDKE0YgvAJ-dhzCbf2GG-ifnLQy93MEF190EB7ZxFkNCmlPuWkAdjhPdk7GYejApnMhEpa8P6_FLia4cHWl4ZKESUKw3b8mcslLqYMc0eFK6HWH3ZklD07xSDRnorQu8CFViBZI2LCxatKW9qSCbnqCvsknLIVj1rcQRvCyHlQlOes81aXpFSd5DuS717UYYPqs4BQoiQeX8c",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCGqaUJg2pKSD96XdqczVtYKgeYRTtczNnW9Sq9K4a_YC9f8f68AVhgroiZgllm80ylEspOcSMYsSfRajofwUycGLoP0G1wdcC8MsMDTls-E0CvfXzUkOK1fYy6Y4fhEiXa_8bWL0WiD9G1tyqGuVF7IxNEkwXS5ThL2SnP1lKU2FEY1f73WX1u2yussEc23yI4XRo_lxqGiYE8touxIypuBZRvS-c9QHMRYCU9o45Ar2OXJBnVrb_DH4B-m17tXzdg7DZnArgfSHE"
        ],
        concepts: ["Portrait", "Commercial", "Editorial"],
        lens: "50mm f/1.2",
        aperture: "f/1.2",
        iso: "320"
    },
    {
        id: 4,
        name: "Sophia Kim",
        studio: "Minimal Studio",
        location: "Hà Nội",
        price: "2.1M VNĐ",
        rating: 4.9,
        verified: false,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBwioxW3jjy_6uC1TYEOXInAWiG6Lfhucd-W1WaCTQ7qyl_q0i6jj1OY14vSUiNUTGgQdWORgkYjbpRWYAGKHUI7_0uZqa2XjNXoVdZ8orm0Qo0YnWiBanA2CUCj9p6ZHlbZIVDYsmOq3ggx6zDjiinNwBbZ7FYoM5MBA3SJdzYPp6n_Nr_KvjJt1LJ9er_nWvUjOy82Spo0AAss0vPPLWr2sY2SH7NFwyfrf9_400SCeU2c2F1WEl0ARHU0ohmb3hB2D4Cvv6ABdI",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD3sGbV9SbV_9oNehWfOGMzgEgzjoKO4Uv3lXS6lgv5KOXLASiYh_2Q3rMzBjTre04lYiqkx1hA2FRExSxjg4oFfGK48pi_-9TcAfQCwH7b9CCRNowEc6cOeCzcgEIn80Kjrn-Y_WO2iEITSxrm4B7O8mQ1-0CNBvQM7H9NtN9FWcYND933nnCLVBt2ur8vRRQ5nEnWpuUJjE1Z7bysxuXNhfjOG4KMRwqPOcfUr6wtXa2qdySUoLqGR8cCzncH45Ee2lvZxbNWIH8",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCRwHSThZH6h6spE0aPX_rFGudbOYE8isRp30dC4C37G2UNKnKO0oZfIzsU9EnB8AW5kkCDs2dXQwziaxtNRfJ4g6R44gVK-3sevnbn-DdKWKdoRJe0Jz-D2wKEyIPNpwlLExMjrS3SvrLnRkbvmnlKWZJC_MB8Qqr5jdulxr-atv6-OHZy7ujqvdmsYxs1psMHap76bCM_HCNRomyD2EAl71SNTGh3EcMKDKaUFcPUjNyzYkjhJpXbr-KBnkcUkedwTW3D4zggvi4"
        ],
        concepts: ["Portrait", "Couple", "Wedding"],
        lens: "24-70mm f/2.8",
        aperture: "f/2.8",
        iso: "400"
    },
    {
        id: 5,
        name: "Alex Rivera",
        studio: "Urban Lens",
        location: "Đà Nẵng",
        price: "1.5M VNĐ",
        rating: 4.6,
        verified: true,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD-mxIaMH8L5xRt2GG2cbN2nFaT3osYea-oRO45z1wzuSliH5f4igUzDvvj0SvRZjVyBl0543VGd-RguwcTSm21NXP27U0mTS0IsqVQu92FKNCnIgMmL63IlbaSn3APkjETrNyoa1L8MPE7GxlJUf6qV-q1cqon6jRsQMpft62rxDOaEdhFinvmLpM0wP_zuk2Vw8PXpzmCSy9OIxt0LAWiTgrdoQDf9gbwu_3BjR0gC0WNj_kGqN7iGc8NHLV0yVIBR88qa5hqUlA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBUL_dGQMKANuzqoER1q0FgMLefLvCV-MYFGa8W8fskL4czsMRX2si-fUYd2Ync63GDKE0YgvAJ-dhzCbf2GG-ifnLQy93MEF190EB7ZxFkNCmlPuWkAdjhPdk7GYejApnMhEpa8P6_FLia4cHWl4ZKESUKw3b8mcslLqYMc0eFK6HWH3ZklD07xSDRnorQu8CFViBZI2LCxatKW9qSCbnqCvsknLIVj1rcQRvCyHlQlOes81aXpFSd5DuS717UYYPqs4BQoiQeX8c",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCGqaUJg2pKSD96XdqczVtYKgeYRTtczNnW9Sq9K4a_YC9f8f68AVhgroiZgllm80ylEspOcSMYsSfRajofwUycGLoP0G1wdcC8MsMDTls-E0CvfXzUkOK1fYy6Y4fhEiXa_8bWL0WiD9G1tyqGuVF7IxNEkwXS5ThL2SnP1lKU2FEY1f73WX1u2yussEc23yI4XRo_lxqGiYE8touxIypuBZRvS-c9QHMRYCU9o45Ar2OXJBnVrb_DH4B-m17tXzdg7DZnArgfSHE"
        ],
        concepts: ["Street", "Urban", "Documentary"],
        lens: "28mm f/2",
        aperture: "f/2",
        iso: "800"
    },
    {
        id: 6,
        name: "Luna Park",
        studio: "Ethereal Studio",
        location: "Hà Nội",
        price: "3.5M VNĐ",
        rating: 5.0,
        verified: true,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBUL_dGQMKANuzqoER1q0FgMLefLvCV-MYFGa8W8fskL4czsMRX2si-fUYd2Ync63GDKE0YgvAJ-dhzCbf2GG-ifnLQy93MEF190EB7ZxFkNCmlPuWkAdjhPdk7GYejApnMhEpa8P6_FLia4cHWl4ZKESUKw3b8mcslLqYMc0eFK6HWH3ZklD07xSDRnorQu8CFViBZI2LCxatKW9qSCbnqCvsknLIVj1rcQRvCyHlQlOes81aXpFSd5DuS717UYYPqs4BQoiQeX8c",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD3sGbV9SbV_9oNehWfOGMzgEgzjoKO4Uv3lXS6lgv5KOXLASiYh_2Q3rMzBjTre04lYiqkx1hA2FRExSxjg4oFfGK48pi_-9TcAfQCwH7b9CCRNowEc6cOeCzcgEIn80Kjrn-Y_WO2iEITSxrm4B7O8mQ1-0CNBvQM7H9NtN9FWcYND933nnCLVBt2ur8vRRQ5nEnWpuUJjE1Z7bysxuXNhfjOG4KMRwqPOcfUr6wtXa2qdySUoLqGR8cCzncH45Ee2lvZxbNWIH8",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCRwHSThZH6h6spE0aPX_rFGudbOYE8isRp30dC4C37G2UNKnKO0oZfIzsU9EnB8AW5kkCDs2dXQwziaxtNRfJ4g6R44gVK-3sevnbn-DdKWKdoRJe0Jz-D2wKEyIPNpwlLExMjrS3SvrLnRkbvmnlKWZJC_MB8Qqr5jdulxr-atv6-OHZy7ujqvdmsYxs1psMHap76bCM_HCNRomyD2EAl71SNTGh3EcMKDKaUFcPUjNyzYkjhJpXbr-KBnkcUkedwTW3D4zggvi4"
        ],
        concepts: ["Fine Art", "Editorial", "Fashion"],
        lens: "90mm f/2.8",
        aperture: "f/2.8",
        iso: "100"
    }
];
