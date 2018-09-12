webpackJsonp([180],{1817:function(t,n){t.exports={content:["section",["p","Handling the overall layout of a page."],["h2","Specification"],["h3","Size"],["p","The first level navigation is inclined left near a logo, and the secondary menu is inclined right."],["ul",["li",["p","Top Navigation (almost systems): the height of the first level navigation ",["code","64px"],", the second level navigation ",["code","48px"],"."]],["li",["p","Top Navigation(contents page): the height of the first level navigation ",["code","80px"],", the second level navigation ",["code","56px"],"."]],["li",["p","Calculation formula of a top navigation: ",["code","48+8n"],"."]],["li",["p","Calculation formula of an aside navigation: ",["code","200+8n"],"."]]],["h3","Interaction rules"],["ul",["li",["p","The first level navigation and the last level navigation should be distincted by visualization;"]],["li",["p","The current item should have the highest priority of visualization;"]],["li",["p","When the current navigation item is collapsed, the stlye of the current navigation item will be applied to its parent level;"]],["li",["p","The left side navigation bar has support for both the accordion and expanding styles, you can choose the one that fits your case best."]]],["h2","Visualization rules"],["p"," Style of a navigation should conform to its level."],["ul",["li",["p",["strong","Emphasis by colorblock"]],["p","When background color is a deep color, you can use this pattern for the parent level navigation item of current page."]],["li",["p",["strong","The highlight match stick"]],["p","When background color is a light color, you can use this pattern for the current page navigation item, we recommed using it for the last item of the navigation path."]],["li",["p",["strong","Hightlighted font"]],["p","From the visualization aspect, hightlighted font is stronger than colorblock, this pattern is often used for the parent level of the current item."]],["li",["p",["strong","Enlarge the size of the font"]],["p",["code","12px"],"\u3001",["code","14px"]," is a standard font size of navigations\uff0c",["code","14px"]," is used for the first and the second level of the navigation. You can choose a appropriate font size in terms of the level of your navigation."]]],["h2","Component Overview"],["ul",["li",["p",["code","Layout"],": The layout wrapper, in which ",["code","Header"]," ",["code","Sider"]," ",["code","Content"]," ",["code","Footer"]," or ",["code","Layout"]," itself can be nested, and can be placed in any parent container."]],["li",["p",["code","Header"],": The top layout with default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Sider"],": The sidebar with default style and basic functions, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Content"],": The content layout with default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]],["li",["p",["code","Footer"],": The bottom layout with default style, in which any element can be nested, and must be placed in ",["code","Layout"],"."]]],["blockquote",["p","Based on ",["code","flex layout"],", please pay attention to the ",["a",{title:null,href:"http://caniuse.com/#search=flex"},"compatibility"],"."]]],meta:{category:"Components",type:"Layout",cols:1,title:"Layout",filename:"components/layout/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Specification",title:"Specification"},"Specification"]],["li",["a",{className:"bisheng-toc-h2",href:"#Visualization-rules",title:"Visualization rules"},"Visualization rules"]],["li",["a",{className:"bisheng-toc-h2",href:"#Component-Overview",title:"Component Overview"},"Component Overview"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span><span class="token punctuation">></span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>left sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span><span class="token punctuation">></span></span>main content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Content</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sider</span><span class="token punctuation">></span></span>right sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sider</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span><span class="token punctuation">></span></span>footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Footer</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>'},["code","<Layout>\n  <Header>header</Header>\n  <Layout>\n    <Sider>left sidebar</Sider>\n    <Content>main content</Content>\n    <Sider>right sidebar</Sider>\n  </Layout>\n  <Footer>footer</Footer>\n</Layout>"]],["h3","Layout"],["p","The wrapper."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","className"],["td","container className"],["td","string"],["td","-"]],["tr",["td","hasSider"],["td","whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering"],["td","boolean"],["td","-"]],["tr",["td","style"],["td","to customize the styles"],["td","object"],["td","-"]]]],["blockquote",["p","APIs of ",["code","Layout.Header"]," ",["code","Layout.Footer"]," ",["code","Layout.Content"]," are the same as that of ",["code","Layout"],"."]],["h3","Layout.Sider"],["p","The sidebar."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","breakpoint"],["td",["a",{title:null,href:"/components/grid#api"},"breakpoints"]," of the responsive layout"],["td","Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }"],["td","-"]],["tr",["td","className"],["td","container className"],["td","string"],["td","-"]],["tr",["td","collapsed"],["td","to set the current status"],["td","boolean"],["td","-"]],["tr",["td","collapsedWidth"],["td","width of the collapsed sidebar, by setting to ",["code","0"]," a special trigger will appear"],["td","number"],["td","64"]],["tr",["td","collapsible"],["td","whether can be collapsed"],["td","boolean"],["td","false"]],["tr",["td","defaultCollapsed"],["td","to set the initial status"],["td","boolean"],["td","false"]],["tr",["td","reverseArrow"],["td","reverse direction of arrow, for a sider that expands from the right"],["td","boolean"],["td","false"]],["tr",["td","style"],["td","to customize the styles"],["td","object"],["td","-"]],["tr",["td","theme"],["td","color theme of the sidebar"],["td","string: ",["code","light"]," ",["code","dark"]],["td",["code","dark"]]],["tr",["td","trigger"],["td","specify the customized trigger, set to null to hide the trigger"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","width"],["td","width of the sidebar"],["td","number","|","string"],["td","200"]],["tr",["td","onCollapse"],["td","the callback function, executed by clicking the trigger or activating the responsive layout"],["td","(collapsed, type) => {}"],["td","-"]],["tr",["td","onBreakpoint"],["td","the callback function, executed when ",["a",{title:null,href:"/components/grid#api"},"breakpoints"]," changed"],["td","(broken) => {}"],["td","-"]]]],["h4","breakpoint width"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  xs<span class="token punctuation">:</span> <span class="token string">\'480px\'</span><span class="token punctuation">,</span>\n  sm<span class="token punctuation">:</span> <span class="token string">\'576px\'</span><span class="token punctuation">,</span>\n  md<span class="token punctuation">:</span> <span class="token string">\'768px\'</span><span class="token punctuation">,</span>\n  lg<span class="token punctuation">:</span> <span class="token string">\'992px\'</span><span class="token punctuation">,</span>\n  xl<span class="token punctuation">:</span> <span class="token string">\'1200px\'</span><span class="token punctuation">,</span>\n  xxl<span class="token punctuation">:</span> <span class="token string">\'1600px\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code","{\n  xs: '480px',\n  sm: '576px',\n  md: '768px',\n  lg: '992px',\n  xl: '1200px',\n  xxl: '1600px',\n}"]]]}}});