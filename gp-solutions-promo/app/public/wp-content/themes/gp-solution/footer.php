<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gp-solution
 */

?>

<footer class="footer">
  <style>
  .footer {
    background: linear-gradient(0deg,
        rgba(17, 53, 99, 0.6) 0%,
        rgba(17, 53, 99, 0.6) 100%),
      url("<?php echo get_template_directory_uri(); ?>/img/footer-back.png") center / cover no-repeat lightgray;
  }
  </style>

  <h2 class="h2 h-with-line"><?php the_field('review_title'); ?></h2>
  <div class="slider-container">

    <!-- there should be a repeater here, but I can't set it up without a paid subscription -->
    <div id="slider-list" class="slider">
      <?php
$clientReview = [
  [
      'photo' => get_template_directory_uri() . '/img/clients-review/claus.png',
      'name' => 'Claus Palmgren Jessen',
      'position' => 'Managing Director at Afrika-safari',
      'logo' => get_template_directory_uri() . '/img/clients-review/claus-logo.svg',
      'description' => '“Due to their experience in travel IT we’ve selected GP Solutions to work on a custom project for Afrika-safari, which involved interaction with Amadeus. We found GP team to be professional, dependable and responsive. We are pleased to recommend GP Solutions GmbH as a reliable travel technology partner.”',
  ],
  [
      'photo' => get_template_directory_uri() . '/img/clients-review/marc.jpeg',
      'name' => 'Marc Blaser',
      'position' => 'Director Projects & E-Business, Hotelplan Management AG, Switzerland',
      'logo' => get_template_directory_uri() . '/img/clients-review/holtepan.png',
      'description' => '“Although metrics are skewed by the pandemic, GP Solutions delivered high-quality work. They demonstrated the ability to quickly allocate new resources as needed and clearly care about our needs. Their expertise in travel-oriented development and their team’s wide range of skills has been huge for us.”',
  ],
  [
      'photo' => get_template_directory_uri() . '/img/clients-review/dennis.png',
      'name' => 'Dennis Behnsen',
      'position' => 'Vice President, EF Education First, Switzerland',
      'logo' => get_template_directory_uri() . '/img/customers-icons/ef.svg',
      'description' => '“Our company\'s project required customization to fit our needs. Our unique requests and developments were handled very efficiently by GP Solutions. The analysts, developers and business managers at GP Solutions were always on top of things – providing detailed information and high levels of attention to detail to ensure a top quality product was produced.”',
  ],
  [
      'photo' => get_template_directory_uri() . '/img/clients-review/stepan.jpeg',
      'name' => 'Stan Nazarenko',
      'position' => 'CEO, Piprate, Ireland',
      'logo' => get_template_directory_uri() . '/img/clients-review/papirate.png',
      'description' => '“With tight deadlines looming, GP Solutions delivered the proof of concept on time, drawing praise from clients. Though initially unfamiliar with the programming language, they spent ample time to learn. Their professionalism and dedication were vital components of the project’s success.”',
  ],
  [
    'photo' => get_template_directory_uri() . '/img/clients-review/claus.png',
    'name' => 'Claus Palmgren Jessen',
    'position' => 'Managing Director at Afrika-safari',
    'logo' => get_template_directory_uri() . '/img/clients-review/claus-logo.svg',
    'description' => '“Due to their experience in travel IT we’ve selected GP Solutions to work on a custom project for Afrika-safari, which involved interaction with Amadeus. We found GP team to be professional, dependable and responsive. We are pleased to recommend GP Solutions GmbH as a reliable travel technology partner.”',
],
];


foreach ($clientReview as $review) {
  ?>
      <div class="slide">
        <div class="feedback-header">
          <div class="client-photo">
            <img src="<?php echo esc_url($review['photo']); ?>" alt="photo of <?php echo esc_attr($review['name']); ?>"
              class="client-img">
          </div>
          <div class="client-data">
            <div class="name"><?php echo esc_html($review['name']); ?></div>
            <div class="position"><?php echo esc_html($review['position']); ?></div>
          </div>
          <div class="company-logo">
            <img src="<?php echo esc_url($review['logo']); ?>" alt="Company Logo" class="logo-img">
          </div>
        </div>
        <p class="feedback-description"><?php echo esc_html($review['description']); ?></p>
      </div>
      <?php
}
?>
    </div>

  </div>
  <div class="slider-controls">
    <button type="button" class="prev pagination-button" onclick="prevSlide()">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path
          d="M14.4999 5.56988C14.7336 5.56943 14.96 5.6508 15.1399 5.79988C15.2412 5.88383 15.3249 5.98693 15.3863 6.10328C15.4476 6.21963 15.4854 6.34693 15.4975 6.47791C15.5096 6.60889 15.4957 6.74096 15.4566 6.86656C15.4176 6.99217 15.3542 7.10883 15.2699 7.20988L10.7899 12.5699L15.1099 17.9399C15.193 18.0422 15.255 18.1599 15.2925 18.2862C15.3299 18.4125 15.342 18.545 15.3281 18.6761C15.3141 18.8071 15.2744 18.9341 15.2113 19.0497C15.1481 19.1653 15.0627 19.2674 14.9599 19.3499C14.8565 19.4409 14.7353 19.5096 14.6041 19.5516C14.4728 19.5936 14.3343 19.608 14.1972 19.5939C14.0601 19.5798 13.9274 19.5375 13.8074 19.4697C13.6874 19.4019 13.5827 19.3101 13.4999 19.1999L8.66995 13.1999C8.52287 13.021 8.44246 12.7965 8.44246 12.5649C8.44246 12.3333 8.52287 12.1088 8.66995 11.9299L13.6699 5.92988C13.7703 5.80887 13.8977 5.7132 14.0419 5.65065C14.1861 5.58811 14.343 5.56043 14.4999 5.56988Z"
          fill="white" />
      </svg>
    </button>
    <div class="dots-container">
      <span class="dot" onclick="currentSlide(0)"></span>
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <button type="button" class="next pagination-button" onclick="nextSlide()">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path
          d="M10.5001 19.5698C10.2664 19.5702 10.04 19.4888 9.86005 19.3398C9.75879 19.2558 9.67509 19.1527 9.61374 19.0364C9.55239 18.92 9.51459 18.7927 9.50251 18.6617C9.49044 18.5308 9.50432 18.3987 9.54337 18.2731C9.58241 18.1475 9.64585 18.0308 9.73005 17.9298L14.2101 12.5698L9.89005 7.19977C9.80699 7.09748 9.74495 6.97978 9.70752 6.85344C9.67009 6.7271 9.658 6.59461 9.67194 6.46358C9.68587 6.33255 9.72557 6.20557 9.78875 6.08994C9.85192 5.9743 9.93732 5.87229 10.0401 5.78976C10.1435 5.69873 10.2647 5.63006 10.3959 5.58807C10.5272 5.54608 10.6657 5.53168 10.8028 5.54576C10.9399 5.55985 11.0726 5.60212 11.1926 5.66992C11.3126 5.73772 11.4173 5.82959 11.5001 5.93976L16.3301 11.9398C16.4771 12.1187 16.5575 12.3431 16.5575 12.5748C16.5575 12.8064 16.4771 13.0308 16.3301 13.2098L11.3301 19.2098C11.2297 19.3308 11.1023 19.4264 10.9581 19.489C10.8139 19.5515 10.657 19.5792 10.5001 19.5698Z"
          fill="white" />
      </svg>
    </button>
  </div>
</footer>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
<?php wp_footer(); ?>
</body>

</html>