import { Box, Container, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { useLocales } from 'locales';
import { RxDotFilled } from 'react-icons/rx';
import signup1 from '../../assets/images/helpCenter/signup-01.png';
import signup2 from '../../assets/images/helpCenter/signup-02.png';

const BrowsersAnswers = () => {
  const { dynamicLang } = useLocales();
  const lng = dynamicLang === 'ar';
  const ANSWERS = [
    {
      title: 'Get Started',
      q: 'Sign Up',
      ans: (
        <Container align="center">
          <Typography variant="h6" fontWeight="700">
            How to Sign Up?
          </Typography>
          <Stack direction="column" align="center">
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    To sign up and register new account for SKU Markets, you need to visit SKU
                    Markets home page
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <Box
                component="img"
                src={signup1}
                alt="Signup page"
                sx={{ width: '100%', borderRadius: 2, boxShadow: 2 }}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="and click on the “Sign Up” button or Jump start your portfolio." />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    You will then be asked to create an account with your First name, last name,
                    email address, and crearte a new password for your account to sign up.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>{/* <RxStar /> */} *</span>
                    Be noted that by signing up, you will agree to our policies.
                  </>
                }
              />
            </ListItem>

            <ListItem>
              <Box
                component="img"
                src={signup2}
                alt="Signup page"
                sx={{ width: '100%', borderRadius: 2, boxShadow: 2 }}
              />
            </ListItem>
          </Stack>
        </Container>
      ),
    },
    {
      title: 'About SKU Markets',
      q: 'Who is SKU Markets',
      ans: (
        <Container align="center">
          <Typography variant="h6" fontWeight="700">
            {lng ? 'ماهي منصة اس كي يو ماركتس؟' : 'Who is SKU Markets?'}
          </Typography>
          <Stack direction="column" align="center">
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>

                    {lng
                      ? 'اس كي يو ماركتس هي منصة متكاملة للتجارة الإلكترونية، تمكن جميع أطراف العملية التسويقية من تجار جملة، وتجار التجزئة، والبائعين، والعملاء النهائيين، بي تو بي وبي تو سي، من التفاعل وإدارة أعمالهم بكفاءة وربحية. تهدف منصتنا إلى تسهيل شراء الأشياء وبيعها بشكل أسرع، حتى تتمكن الشركات من الوصول إلى المزيد من الأشخاص وتحقيق المزيد من الربحية على اختلاف أعمالهم وتجارتهم.'
                      : 'SKU Markets is dedicated to offering a complete online marketplace platform that enables wholesalers, retailers, resellers, and end customers, B2B & B2C to interact and conduct business efficiently and profitably. Our platform is meant to make it easier and faster to buy and sell things, so businesses can reach more people and make more money.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'لدينا من الخبراء والمحترفين من ذوي الخبرة الذين يتطلعون إلى تقديم الدعم الفني على مدار الساعة، لمساعدة الشركات في نموها. نؤمن في اس كي يو ماركتس أنه من خلال توفير منصة سهلة الاستخدام وذات أداء قوي، بالإضافة إلى خدمة عملاء جيدة ومجموعة متنوعة من الميزات والأدوات، يمكننا بذلك مساعدة الشركات في الازدهار في السوق التنافسية كل اليوم.'
                      : "Our staff consists of experienced professionals excited about assisting businesses in their growth. We believe that by providing a user-friendly and intuitive platform, as well as good customer service, and a diverse set of features and tools, we can assist businesses in thriving in today's competitive marketplace."}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'تقدم منصتنا مجموعة من الميزات والأدوات لمساعدة الشركات على تحسين عملياتها، بما في ذلك إدارة المخزون ومعالجة الطلبات والشحن وعمليات الدفع. نقدم أيضًا رؤى وتحليلات وإحصاءات وإدارة وحلول بيع، حيث نوفر الوصول إلى مجموعة واسعة من الموردين والمنتجات، مما يسهل على الشركات الحصول على المنتجات التي تحتاجها بأسعار تنافسية.'
                      : 'Our platform offers a range of features and tools to help businesses optimize their operations, including inventory management, order processing, shipping, and payment processing. We also offer insights, analytics, statistics, management, and selling solutions as we provide access to a wide range of suppliers and products, making it easier for businesses to source the products they need at competitive prices.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'في اس كي يو ماركتس، نلتزم ببناء علاقات طويلة الأجل مع عملائنا بناءً على الثقة والشفافية والاحترام المتبادل. فنحن نقدم دعمًا ممتازًا للعملاء ونسعى جاهدين لتقديم تجربة عالية الجودة لكل مستخدم على نظامنا الأساسي.'
                      : 'At SKU Markets, we are committed to building long-term relationships with our customers based on trust, transparency, and mutual respect. We provide excellent customer support and strive to deliver a high-quality experience to every user on our platform.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'لذلك، سواء كنت تاجر جملة أو بائع تجزئة، فإناس كي يو ماركتس لديها الأدوات والموارد التي تحتاجها لتنمية عملك والنجاح في تجارتك الإلكترونية. انضم إلينا اليوم وابدأ في نقل عملك إلى آفاق واسعة.'
                      : 'Whether you are a wholesaler or retailer, SKU Markets has the tools and resources you need to grow your business and succeed in the online marketplace. Join us today and start taking your business to the next level.'}
                  </>
                }
              />
            </ListItem>
          </Stack>
        </Container>
      ),
    },
    {
      title: 'About SKU Markets',
      q: 'Why do we need to use SKU Markets',
      ans: (
        <Container align="center">
          <Typography variant="h6" fontWeight="700">
            {lng
              ? 'لماذا تحتاج تجارتك إلى منصة اس كي يو ماركتس؟'
              : 'Why do we need to use SKU Markets?'}
          </Typography>
          <Stack direction="column" align="center">
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'تعد اس كي يو ماركتس منصة ذات قيمة لأي تاجر جملة أو بائع تجزئة أو البائعين، أو العملاء النهائيين" Bبي تو بي وبي تو سي "، حيث تعمل المنصة على  تنمية الأعمال وتعزيز الأرباح النهائية، وفيما يلي بعض الأسباب للإجابة على سؤال لماذا تحتاج تجارتك إلى منصة اس كي يو ماركتس؟ نعرضها في النقاط التالية:'
                      : 'SKU Markets is a valuable tool for any wholesaler or retailer trying to grow their business and enhance their bottom line. Here are just a few reasons why:'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      sx={{ mr: 1, textDecoration: 'underline', fontWeight: 'bolder' }}
                    >
                      {lng ? 'مجموعة واسعة من المنتجات :' : 'Wide range of products:'}
                    </Typography>
                    {lng
                      ? 'توفر اس كي يو ماركتس الوصول إلى مجموعة واسعة من الموردين والمنتجات، مما يسهل على الشركات الحصول على المنتجات التي تحتاجها بأسعار تنافسية.  هذا يعني أنه يمكنك توسيع عروض منتجاتك وجذب المزيد من العملاء، مما يؤدي في النهاية إلى زيادة إيراداتك.'
                      : 'SKU Markets offer access to a wide range of suppliers and products, making it easier for businesses to source the products they need at competitive prices. This means that you can expand your product offerings and attract more customers, ultimately increasing your revenue.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      sx={{ mr: 1, textDecoration: 'underline', fontWeight: 'bolder' }}
                    >
                      {lng ? 'منصة سهلة الاستخدام :' : 'User-friendly platform:'}
                    </Typography>
                    {lng
                      ? ' تم تصميم منصة اس كي يو ماركتس لتكون سهلة الاستخدام ، مما يسهل على الشركات إدارة عملياتها، ومعالجة الطلبات، وتتبع الشحنات. ومع توفر مجموعة من الميزات والأدوات، يمكن للشركات تحسين عملياتها وتحسين الكفاءة.'
                      : 'The SKU Markets platform is designed to be user-friendly and intuitive, making it easy for businesses to manage their operations, process orders, and track shipments. With a range of features and tools available, businesses can optimize their operations and improve efficiency.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      sx={{ mr: 1, textDecoration: 'underline', fontWeight: 'bolder' }}
                    >
                      {lng ? 'التسعير التنافسي :' : 'Competitive pricing:'}
                    </Typography>
                    {lng
                      ? 'تقدم اس كي يو ماركتس أسعارًا تنافسية على المنتجات والخدمات، مما يسهل على الشركات تعظيم هوامش ربحها. كذلك ف من خلال الحصول على المنتجات بأسعار أقل، يمكن للشركات بيعها بأسعار تنافسية، وجذب المزيد من العملاء، وزيادة إيراداتهم.'
                      : 'SKU Markets offers competitive pricing on products and services, making it easier for businesses to maximize their profit margins. By sourcing products at lower prices, businesses can sell them at competitive prices, attract more customers, and increase their revenue.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      sx={{ mr: 1, textDecoration: 'underline', fontWeight: 'bolder' }}
                    >
                      {lng ? 'دعم ممتاز للعملاء :' : 'Excellent customer support:'}
                    </Typography>
                    {lng
                      ? 'توفر اس كي يو ماركتس دعمًا ممتازًا للعملاء، مع فريق من المتخصصين ذوي الخبرة المتاحين للمساعدة في أي أسئلة أو مشكلات قد تنشأ. هذا يعني أنه يمكن للشركات الاعتماد على منصة SKU للمساعدة والدعم عند الحاجة إليها، مما يؤدي في النهاية إلى تحسين تجربة المستخدم الشاملة.'
                      : 'SKU Markets provides excellent customer support, with a team of experienced professionals available to help with any questions or issues that may arise. This means that businesses can rely on SKU Markets for help and support when they need it, ultimately improving the overall user experience.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="span"
                      sx={{ mr: 1, textDecoration: 'underline', fontWeight: 'bolder' }}
                    >
                      {lng ? 'الحماية والأمان :' : 'Security:'}
                    </Typography>
                    {lng
                      ? 'تستخدم منصة اس كي يو ماركتس تدابير أمان متقدمة لحماية المعلومات الشخصية والمالية للمستخدمين، مما يضمن أن الشركات يمكنها إجراء المعاملات بأمان. وينبع اهتمامنا بالأمان والحماية من بناء الثقة بين عملائنا، مما يؤدي في النهاية إلى مزيد من المبيعات والإيرادات. في الختام، توفر اس كي يو ماركتس منصة سوق شاملة عبر الإنترنت قد تساعد الشركات في توسيع نطاق وصول تجارتها الإلكترونية، وزيادة الدخل وتحسين عملياتها. اس كي يو ماركتس هو خيار ذكي لأي تاجر جملة أو بائع تجزئة يرغب في الازدهار في السوق عبر الإنترنت، مع إمكانية الوصول إلى مجموعة واسعة من الأدوات التحليلية، ومنصة سهلة الاستخدام، وتسعير تنافسي، وعناية ممتازة بالعملاء، وتدابير أمان فائقة.'
                      : "The SKU Markets platform uses advanced security measures to protect users' personal and financial information, ensuring that businesses can conduct transactions safely and securely. This is important for building trust and confidence among customers, ultimately leading to more sales and revenue. In conclusion, SKU Markets provides a comprehensive online marketplace platform that may assist businesses in expanding their reach, increasing income, and optimizing their operations. SKU Markets is a smart choice for any wholesaler or retailer wishing to flourish in the online marketplace, with access to a vast range of items, a user-friendly platform, competitive pricing, excellent customer care, and superior security measures."}
                  </>
                }
              />
            </ListItem>
          </Stack>
        </Container>
      ),
    },
    {
      title: 'About SKU Markets',
      q: 'What is the main core and idea of SKU Markets',
      ans: (
        <Container align="center">
          <Typography variant="h6" fontWeight="700">
            {lng
              ? 'ما هو الجوهر الرئيسي وفكرة اس كي يو ماركتس ؟'
              : 'What is the main core and idea of SKU Markets?'}
          </Typography>
          <Stack direction="column" align="center">
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'اس كي يو ماركتس هي منصة تجارة إلكترونية متطورةK تهدف إلى تبسيط وتحسين عملية شراء البضائع وبيعها عبر الإنترنت. ينصب التركيز الرئيسي لمنصتنا على ربط (تجار الجملة وتجار التجزئة والبائعين والعملاء النهائيين) بي تو بي، وبي تو سي من خلال تقديم مجموعة متنوعة من الميزات والحلول لمساعدتهم على النجاح في عالم التجارة الإلكترونية التنافسي.'
                      : "SKU Markets is a cutting-edge e-commerce platform that aims to simplify and improve the process of purchasing and selling goods online. Our platform's major focus is to connect (wholesalers, retailers, resellers, and end customers) B2B & B2C by offering a variety of features and solutions to assist them in succeeding in the competitive world of e-commerce."}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'تم بناء منصة اس كي يو ماركتس بهدف تسهيل مصدر المنتجات وبيعها عبر الإنترنت على الشركات. توفر منصتنا للشركات إمكانية الوصول إلى مجموعة متنوعة من الموردين والمنتجات، مما يسهل عليهم العثور على المنتجات التي يحتاجونها بتكاليف مقبولة. يتيح النظام لهم إضافة المزيد من المنتجات وجذب المزيد من العملاء، مما يساعدهم على جني المزيد من المال.'
                      : 'The SKU Markets platform is built with the goal of making it easier for businesses to source and sell products online. Our platform provides businesses with access to a diverse choice of suppliers and products, making it easier for them to find the products they require at affordable costs. This lets them add more products and attract more customers, which helps them make more money.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'منصة اس كي يو ماركتس سهلة الاستخدام ومباشرة، مع مجموعة متنوعة من المميزات والأدوات لمساعدة الشركات في إدارة عملياتها وتحسين إنتاجيتها.'
                      : 'The SKU Markets platform is user-friendly and straightforward, with a variety of features and tools to assist firms in managing their operations and optimizing their productivity.'}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'الأمن هو سمة مهمة أخرى لمنصتنا. نحن نستخدم أساليب أمان حديثة لحماية المعلومات الشخصية والمالية للمستخدمين، مما يسمح للشركات بإجراء المعاملات بطريقة آمنة . هذا أمر بالغ الأهمية لزيادة ثقة المستهلك بنا، الأمر الذي مما يؤدي إلى زيادة المبيعات والإيرادات.'
                      : "Security is another important feature of our platform. We employ modern security methods to safeguard users' personal and financial information, allowing businesses to make transactions in a safe and secure manner. This is critical for increasing consumer trust and confidence, which leads to increased sales and revenue."}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'في اس كي يو ماركتس، نعتقد أن بناء علاقات طويلة الأجل مع عملائنا أمر بالغ الأهمية لنجاحنا. لهذا السبب نقدم دعمًا ممتازًا للعملاء، مع فريق من المهنيين ذوي الخبرة المتاحين للمساعدة في أي أسئلة أو مشكلات قد تنشأ. من خلال توفير تجربة عالية الجودة لكل مستخدم على نظامنا الأساسي، فنحن ملتزمون ببناء الثقة والولاء بين عملائنا.'
                      : "At SKU Markets, we believe that building long-term relationships with our customers is crucial to our success. That's why we provide excellent customer support, with a team of experienced professionals available to help with any questions or issues that may arise. By providing a high-quality experience to every user on our platform, we are committed to building trust and loyalty among our customers."}
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <span style={{ color: '#0D6EFD' }}>
                      <RxDotFilled />
                    </span>
                    {lng
                      ? 'باختصار، يتمثل الجوهر والفكرة الرئيسيان لأسواق اس كي يو في تبسيط وتسهيل عملية شراء البضائع وبيعها عبر الإنترنت، وربط تجار الجملة وتجار التجزئة والبائعين والعملاء النهائيين) بي تو بي، وبي تو سي وتزويدهم بالأدوات والموارد التي يحتاجون إليها للنجاح في تجارتهم عبر الإنترنت. مع الوصول إلى مجموعة واسعة من المنتجات، ومنصة سهلة الاستخدام، وتدابير أمان متقدمة، ودعم ممتاز للعملاء، تعد اس كي يو ماركتس خيارًا ذكيًا لأي شركة تتطلع إلى توسيع نطاق وصولها وزيادة إيراداتها.'
                      : 'In summary, the main core and idea of SKU Markets is to simplify and streamline the process of buying and selling goods online, connecting wholesalers, retailers, resellers, and end customers) B2B & B2C and providing them with the tools and resources they need to succeed in the online marketplace. With access to a wide range of products, a user-friendly platform, advanced security measures, and excellent customer support, SKU Markets is a smart choice for any business looking to expand its reach and grow its revenue.'}
                  </>
                }
              />
            </ListItem>
          </Stack>
        </Container>
      ),
    },
    {
      title: 'Get Started',
      q: 'Sign Up',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Get Started',
      q: 'What documents do I need to register on SKU Markets',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Get Started',
      q: 'How can I register on SKU Markets as individuals registered',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Become a Partner',
      q: 'What can I do on SKU Markets for other existing platforms',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Become a Partner',
      q: 'What can I sell on SKU Markets',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Become a Partner',
      q: 'What documents do I need to register on SKU Markets',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Subscriptions & Commissions',
      q: 'WWhat is subscription fees for',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Subscriptions & Commissions',
      q: 'how to calculate subscription fees',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Subscriptions & Commissions',
      q: 'How to calculate the Referral Fees cross countries',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
    {
      title: 'Subscriptions & Commissions',
      q: 'Cancellations, Returns and Seller Protection Policy at SKU Markets',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi odio facilis, labore cum nesciunt quo deleniti magnam saepe velit possimus architecto, dolorum fugiat beatae hic, sit ipsa at. Labore recusandae est, excepturi dolorem quidem rerum, architecto facilis, non esse illum saepe eveniet nemo rem ratione nulla quisquam deserunt cupiditate nihil repudiandae distinctio suscipit voluptatum iste. Obcaecati, nobis repellat voluptate at quam, atque placeat quod necessitatibus eius aliquid perspiciatis eos saepe expedita odio accusantium libero cupiditate optio ad nostrum molestiae sit hic. Qui dolores rerum provident doloribus reprehenderit! Qui odio placeat eveniet neque vero tempora totam, voluptatibus nihil nobis mollitia iusto accusamus aut quod fugiat.',
    },
  ];
  return { ANSWERS };
};

export default BrowsersAnswers;
