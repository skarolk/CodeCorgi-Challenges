document.addEventListener("DOMContentLoaded", function() {
  const tableContainer = document.querySelector(".table-contents");
  //   console.log(tableContainer);

  let tableArray = [
    `<tr><td>1</td><td>0</td><td>78.77</td><td>1</td><td>4e20</td><td>-1000</td></tr>`,
    `<tr><td>2</td><td>7d0</td><td>92.22</td><td>1</td><td>7530</td><td>-3000</td></tr>`,
    `<tr><td>3</td><td>bb8</td><td>395.20</td><td>2</td><td>2710</td><td>-3000</td></tr>`,
    `<tr><td>4</td><td>bb8</td><td>123.50</td><td>2</td><td>2710</td><td>-2000</td></tr>`,
    `<tr><td>5</td><td>0</td><td>0.42</td><td>4</td><td>9c40</td><td>-2000</td></tr>`,
    `<tr><td>6</td><td>3e8</td><td>230.54</td><td>1</td><td>ea60</td><td>-2000</td></tr>`,
    `<tr><td>7</td><td>bb8</td><td>347.74</td><td>1</td><td>7530</td><td>-7000</td></tr>`,
    `<tr><td>8</td><td>3e8</td><td>297.08</td><td>4</td><td>2710</td><td>-5000</td></tr>`,
    `<tr><td>9</td><td>2328</td><td>16.14</td><td>7</td><td>9c40</td><td>-7000</td></tr>`,
    `<tr><td>10</td><td>bb8</td><td>986.56</td><td>6</td><td>15f90</td><td>-9000</td></tr>`,
    `<tr><td>11</td><td>2710</td><td>86.39</td><td>3</td><td>1d4c0</td><td>-3000</td></tr>`,
    `<tr><td>12</td><td>1770</td><td>79.46</td><td>8</td><td>c350</td><td>-2000</td></tr>`,
    `<tr><td>13</td><td>2328</td><td>202.95</td><td>10</td><td>4e20</td><td>-9000</td></tr>`,
    `<tr><td>14</td><td>32c8</td><td>1114.88</td><td>12</td><td>11170</td><td>-14000</td></tr>`,
    `<tr><td>15</td><td>1388</td><td>1318.17</td><td>7</td><td>9c40</td><td>-13000</td></tr>`,
    `<tr><td>16</td><td>fa0</td><td>1640.90</td><td>3</td><td>0</td><td>-9000</td></tr>`,
    `<tr><td>17</td><td>4268</td><td>1349.18</td><td>17</td><td>29810</td><td>-11000</td></tr>`,
    `<tr><td>18</td><td>0</td><td>815.02</td><td>15</td><td>0</td><td>-5000</td></tr>`,
    `<tr><td>19</td><td>3e80</td><td>306.39</td><td>1</td><td>7530</td><td>0</td></tr>`,
    `<tr><td>20</td><td>7d0</td><td>783.11</td><td>16</td><td>35b60</td><td>-3000</td></tr>`,
    `<tr><td>21</td><td>4e20</td><td>511.65</td><td>2</td><td>38270</td><td>-15000</td></tr>`,
    `<tr><td>22</td><td>2af8</td><td>985.16</td><td>17</td><td>2710</td><td>-19000</td></tr>`,
    `<tr><td>23</td><td>4650</td><td>701.36</td><td>23</td><td>1adb0</td><td>-15000</td></tr>`,
    `<tr><td>24</td><td>36b0</td><td>1480.90</td><td>17</td><td>222e0</td><td>-8000</td></tr>`,
    `<tr><td>25</td><td>bb8</td><td>884.16</td><td>25</td><td>27100</td><td>-22000</td></tr>`,
    `<tr><td>26</td><td>61a8</td><td>130.17</td><td>26</td><td>15f90</td><td>-26000</td></tr>`,
    `<tr><td>27</td><td>3e8</td><td>2323.30</td><td>13</td><td>35b60</td><td>-28000</td></tr>`,
    `<tr><td>28</td><td>4e20</td><td>2068.09</td><td>7</td><td>2710</td><td>0</td></tr>`,
    `<tr><td>29</td><td>6978</td><td>2749.81</td><td>8</td><td>4baf0</td><td>-9000</td></tr>`,
    `<tr><td>30</td><td>6978</td><td>233.71</td><td>18</td><td>493e0</td><td>-13000</td></tr>`,
    `<tr><td>31</td><td>2710</td><td>1706.98</td><td>15</td><td>1d4c0</td><td>-23000</td></tr>`,
    `<tr><td>32</td><td>6978</td><td>1783.04</td><td>1</td><td>3d090</td><td>-14000</td></tr>`,
    `<tr><td>33</td><td>5208</td><td>1725.98</td><td>6</td><td>3f7a0</td><td>-13000</td></tr>`,
    `<tr><td>34</td><td>3e8</td><td>2794.36</td><td>5</td><td>29810</td><td>-32000</td></tr>`,
    `<tr><td>35</td><td>0</td><td>3164.26</td><td>27</td><td>30d40</td><td>-10000</td></tr>`,
    `<tr><td>36</td><td>61a8</td><td>3493.37</td><td>26</td><td>27100</td><td>-18000</td></tr>`,
    `<tr><td>37</td><td>6d60</td><td>710.14</td><td>35</td><td>222e0</td><td>-8000</td></tr>`,
    `<tr><td>38</td><td>61a8</td><td>2665.91</td><td>30</td><td>15f90</td><td>-40000</td></tr>`,
    `<tr><td>39</td><td>2710</td><td>3922.96</td><td>31</td><td>1fbd0</td><td>-11000</td></tr>`,
    `<tr><td>40</td><td>4e20</td><td>524.39</td><td>27</td><td>15f90</td><td>-8000</td></tr>`,
    `<tr><td>41</td><td>3e80</td><td>1405.74</td><td>26</td><td>53020</td><td>-18000</td></tr>`,
    `<tr><td>42</td><td>7530</td><td>132.57</td><td>39</td><td>5cc60</td><td>-23000</td></tr>`,
    `<tr><td>43</td><td>4a38</td><td>671.17</td><td>31</td><td>29810</td><td>-45000</td></tr>`,
    `<tr><td>44</td><td>a028</td><td>1156.58</td><td>44</td><td>46cd0</td><td>-45000</td></tr>`,
    `<tr><td>45</td><td>5dc0</td><td>1974.00</td><td>30</td><td>3a980</td><td>-19000</td></tr>`,
    `<tr><td>46</td><td>0</td><td>240.57</td><td>45</td><td>c350</td><td>-20000</td></tr>`,
    `<tr><td>47</td><td>1770</td><td>399.47</td><td>7</td><td>27100</td><td>-15000</td></tr>`,
    `<tr><td>48</td><td>3e8</td><td>3183.01</td><td>43</td><td>9c40</td><td>-46000</td></tr>`,
    `<tr><td>49</td><td>7d0</td><td>3836.45</td><td>42</td><td>3f7a0</td><td>-42000</td></tr>`,
    `<tr><td>50</td><td>6d60</td><td>5077.10</td><td>33</td><td>57e40</td><td>-43000</td></tr>`,
    `<tr><td>51</td><td>afc8</td><td>2302.91</td><td>23</td><td>30d40</td><td>-48000</td></tr>`,
    `<tr><td>52</td><td>3a98</td><td>1194.08</td><td>29</td><td>7a120</td><td>-47000</td></tr>`,
    `<tr><td>53</td><td>8ca0</td><td>4486.29</td><td>21</td><td>4baf0</td><td>-25000</td></tr>`,
    `<tr><td>54</td><td>2ee0</td><td>2813.28</td><td>4</td><td>77a10</td><td>-18000</td></tr>`,
    `<tr><td>55</td><td>3a98</td><td>2302.64</td><td>22</td><td>1fbd0</td><td>-51000</td></tr>`,
    `<tr><td>56</td><td>cf08</td><td>4201.43</td><td>16</td><td>33450</td><td>-19000</td></tr>`,
    `<tr><td>57</td><td>1f40</td><td>5796.08</td><td>29</td><td>4e200</td><td>0</td></tr>`,
    `<tr><td>58</td><td>7148</td><td>3073.91</td><td>49</td><td>15f90</td><td>-43000</td></tr>`,
    `<tr><td>59</td><td>9858</td><td>4384.34</td><td>52</td><td>30d40</td><td>-23000</td></tr>`,
    `<tr><td>60</td><td>8ca0</td><td>118.01</td><td>43</td><td>64190</td><td>-48000</td></tr>`,
    `<tr><td>61</td><td>abe0</td><td>4468.22</td><td>4</td><td>41eb0</td><td>-36000</td></tr>`,
    `<tr><td>62</td><td>9c40</td><td>2975.69</td><td>41</td><td>27100</td><td>-50000</td></tr>`,
    `<tr><td>63</td><td>1388</td><td>1789.44</td><td>57</td><td>c350</td><td>-38000</td></tr>`,
    `<tr><td>64</td><td>4650</td><td>2910.95</td><td>32</td><td>1adb0</td><td>-14000</td></tr>`,
    `<tr><td>65</td><td>7918</td><td>465.10</td><td>58</td><td>77a10</td><td>-4000</td></tr>`,
    `<tr><td>66</td><td>9088</td><td>1017.33</td><td>19</td><td>11170</td><td>-13000</td></tr>`,
    `<tr><td>67</td><td>4e20</td><td>6539.16</td><td>62</td><td>53020</td><td>-24000</td></tr>`,
    `<tr><td>68</td><td>105b8</td><td>6118.15</td><td>38</td><td>7530</td><td>-35000</td></tr>`,
    `<tr><td>69</td><td>3e8</td><td>3408.82</td><td>27</td><td>13880</td><td>-2000</td></tr>`,
    `<tr><td>70</td><td>2ee0</td><td>5991.95</td><td>30</td><td>61a80</td><td>-31000</td></tr>`,
    `<tr><td>71</td><td>4e20</td><td>503.72</td><td>40</td><td>1fbd0</td><td>-43000</td></tr>`,
    `<tr><td>72</td><td>11170</td><td>3858.93</td><td>8</td><td>4e200</td><td>-30000</td></tr>`,
    `<tr><td>73</td><td>dac0</td><td>3015.03</td><td>63</td><td>4baf0</td><td>-37000</td></tr>`,
    `<tr><td>74</td><td>cf08</td><td>3008.70</td><td>21</td><td>2e630</td><td>-74000</td></tr>`,
    `<tr><td>75</td><td>11940</td><td>2895.93</td><td>63</td><td>5a550</td><td>-17000</td></tr>`,
    `<tr><td>76</td><td>f230</td><td>2238.54</td><td>60</td><td>b71b0</td><td>-50000</td></tr>`,
    `<tr><td>77</td><td>c350</td><td>6891.69</td><td>63</td><td>99cf0</td><td>-1000</td></tr>`,
    `<tr><td>78</td><td>9858</td><td>5961.95</td><td>71</td><td>94ed0</td><td>-40000</td></tr>`,
    `<tr><td>79</td><td>11558</td><td>1492.65</td><td>20</td><td>249f0</td><td>-35000</td></tr>`,
    `<tr><td>80</td><td>6590</td><td>4463.83</td><td>46</td><td>61a80</td><td>-65000</td></tr>`,
    `<tr><td>81</td><td>1b58</td><td>6215.19</td><td>9</td><td>704e0</td><td>-43000</td></tr>`,
    `<tr><td>82</td><td>1f40</td><td>4790.06</td><td>52</td><td>50910</td><td>-28000</td></tr>`,
    `<tr><td>83</td><td>bf68</td><td>7242.02</td><td>35</td><td>7a120</td><td>-17000</td></tr>`,
    `<tr><td>84</td><td>61a8</td><td>7973.91</td><td>5</td><td>caa30</td><td>-62000</td></tr>`,
    `<tr><td>85</td><td>88b8</td><td>7785.01</td><td>18</td><td>13880</td><td>-28000</td></tr>`,
    `<tr><td>86</td><td>9470</td><td>6379.48</td><td>77</td><td>d6d80</td><td>-20000</td></tr>`,
    `<tr><td>87</td><td>d2f0</td><td>2714.47</td><td>0</td><td>57e40</td><td>-80000</td></tr>`,
    `<tr><td>88</td><td>bb80</td><td>4170.22</td><td>86</td><td>cf850</td><td>-2000</td></tr>`,
    `<tr><td>89</td><td>3a98</td><td>1329.51</td><td>68</td><td>d9490</td><td>-47000</td></tr>`,
    `<tr><td>90</td><td>2328</td><td>5622.22</td><td>44</td><td>7530</td><td>-50000</td></tr>`,
    `<tr><td>91</td><td>2ee0</td><td>6814.14</td><td>79</td><td>9eb10</td><td>-25000</td></tr>`,
    `<tr><td>92</td><td>10d88</td><td>7026.43</td><td>36</td><td>77a10</td><td>-20000</td></tr>`,
    `<tr><td>93</td><td>8ca0</td><td>807.79</td><td>35</td><td>668a0</td><td>-19000</td></tr>`,
    `<tr><td>94</td><td>e678</td><td>6098.34</td><td>61</td><td>72bf0</td><td>-75000</td></tr>`,
    `<tr><td>95</td><td>88b8</td><td>1074.61</td><td>74</td><td>3f7a0</td><td>-58000</td></tr>`,
    `<tr><td>96</td><td>b798</td><td>9005.83</td><td>41</td><td>4e200</td><td>-89000</td></tr>`,
    `<tr><td>97</td><td>0</td><td>3825.77</td><td>94</td><td>222e0</td><td>-4000</td></tr>`,
    `<tr><td>98</td><td>61a8</td><td>8829.53</td><td>97</td><td>d6d80</td><td>-77000</td></tr>`,
    `<tr><td>99</td><td>16f30</td><td>2397.62</td><td>53</td><td>aae60</td><td>-50000</td></tr>`,
    `<tr><td>100</td><td>4650</td><td>7380.23</td><td>58</td><td>ef420</td><td>-55000</td></tr>`
  ];

  const addColor = tableData => {
    for (i = 1; i < tableData.length; i++) {
      // console.log(row.split("<tr").join(""));
      if (i % 3 == 0 && i % 5 == 0) {
        let updatedRow =
          `<tr style="background-color:#262E40"` +
          tableData[i - 1].split("<tr").join("");
        tableContainer.innerHTML += updatedRow;
      } else if (i % 3 == 0) {
        let updatedRow =
          `<tr style="background-color:#6276A3"` +
          tableData[i - 1].split("<tr").join("");
        // console.log(updatedRow);
        tableContainer.innerHTML += updatedRow;
      } else if (i % 5 == 0) {
        let updatedRow =
          `<tr style="background-color:#8AA6E5"` +
          tableData[i - 1].split("<tr").join("");
        tableContainer.innerHTML += updatedRow;
      } else {
        tableContainer.innerHTML += tableData[i - 1];
      }
    }
  };

  addColor(tableArray);
});
