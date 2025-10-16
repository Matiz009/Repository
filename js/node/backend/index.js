const express = require('express');
const app = express();

app.use(express.json());

const PORT = 5000;
const SERVER='/api/v1';

//get request

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
];

const html=`
	<!DOCTYPE html>
<html lang="en-US" xml:lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>
		Software Testing using Multi-Collaboration Platforms
							| European Journal of Science, Innovation and Technology
			</title>

	
<meta name="generator" content="Open Journal Systems 3.1.2.4">
<link rel="icon" href="https://ejsit-journal.com/public/journals/1/favicon_en_US.jpg">
<meta name="gs_meta_revision" content="1.1"/>
<meta name="citation_journal_title" content="European Journal of Science, Innovation and Technology"/>
<meta name="citation_journal_abbrev" content="1"/>
<meta name="citation_issn" content="2786-4936"/> 
<meta name="citation_author" content="Sana Rizwan"/>
<meta name="citation_author" content="Mati ul Rehman"/>
<meta name="citation_author" content="Ayesha Tahir"/>
<meta name="citation_title" content="Software Testing using Multi-Collaboration Platforms"/>
<meta name="citation_date" content="2024/03/26"/>
<meta name="citation_volume" content="4"/>
<meta name="citation_issue" content="2"/>
<meta name="citation_firstpage" content="81"/>
<meta name="citation_lastpage" content="91"/>
<meta name="citation_abstract_html_url" content="https://ejsit-journal.com/index.php/ejsit/article/view/399"/>
<meta name="citation_keywords" xml:lang="en" content="Unit Testing Approach"/>
<meta name="citation_keywords" xml:lang="en" content="System Testing Approach"/>
<meta name="citation_keywords" xml:lang="en" content="Integration Testing Features"/>
<meta name="citation_keywords" xml:lang="en" content="Acceptance Testing Capabilities"/>
<meta name="citation_keywords" xml:lang="en" content="Testing Lifecycle Procedures"/>
<meta name="citation_keywords" xml:lang="en" content="Critical Production in Software Testing"/>
<meta name="citation_keywords" xml:lang="en" content="Risk Assesment"/>
<meta name="citation_keywords" xml:lang="en" content="UAT"/>
<meta name="citation_keywords" xml:lang="en" content="HyperText Transfer Protocol"/>
<meta name="citation_keywords" xml:lang="en" content="Integrated and Continous Deployment Pipelines"/>
<meta name="citation_pdf_url" content="https://ejsit-journal.com/index.php/ejsit/article/download/399/375"/>
<link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" />
<meta name="DC.Creator.PersonalName" content="Sana Rizwan"/>
<meta name="DC.Creator.PersonalName" content="Mati ul Rehman"/>
<meta name="DC.Creator.PersonalName" content="Ayesha Tahir"/>
<meta name="DC.Date.created" scheme="ISO8601" content="2024-03-26"/>
<meta name="DC.Date.dateSubmitted" scheme="ISO8601" content="2024-03-26"/>
<meta name="DC.Date.issued" scheme="ISO8601" content="2024-03-21"/>
<meta name="DC.Date.modified" scheme="ISO8601" content="2024-03-26"/>
<meta name="DC.Description" xml:lang="en" content="Software applications become increasingly complex and competitive pressures intensify; the importance of quality assurance in software development cannot be overstated. Software testing plays a crucial role in the Software Development Lifecycle, necessitating the adoption of enhanced and efficient methodologies and techniques to ensure superior quality. This paper aims to explain and explore existing testing techniques to enhance quality assurance in software development processes by testing means. Various testing tools for backend and frontend applications are available to figure out the outcomes, but selection of the appropriate tool to find the concerned outcomes in software testing aspect is imperative. Loading, implementation, fetching results, extraction of the suitable fallouts is the major aim to the study."/>
<meta name="DC.Description" xml:lang="uk" content=""/>
<meta name="DC.Format" scheme="IMT" content="application/pdf"/>
<meta name="DC.Identifier" content="399"/>
<meta name="DC.Identifier.pageNumber" content="81-91"/>
<meta name="DC.Identifier.URI" content="https://ejsit-journal.com/index.php/ejsit/article/view/399"/>
<meta name="DC.Language" scheme="ISO639-1" content="en"/>
<meta name="DC.Rights" content="Copyright (c) 2024 Sana Rizwan, Mati ul Rehman, Ayesha Tahir"/>
<meta name="DC.Rights" content="https://creativecommons.org/licenses/by/4.0"/>
<meta name="DC.Source" content="European Journal of Science, Innovation and Technology"/>
<meta name="DC.Source.ISSN" content="2786-4936"/>
<meta name="DC.Source.Issue" content="2"/>
<meta name="DC.Source.Volume" content="4"/>
<meta name="DC.Source.URI" content="https://ejsit-journal.com/index.php/ejsit"/>
<meta name="DC.Subject" xml:lang="en" content="Unit Testing Approach"/>
<meta name="DC.Subject" xml:lang="en" content="System Testing Approach"/>
<meta name="DC.Subject" xml:lang="en" content="Integration Testing Features"/>
<meta name="DC.Subject" xml:lang="en" content="Acceptance Testing Capabilities"/>
<meta name="DC.Subject" xml:lang="en" content="Testing Lifecycle Procedures"/>
<meta name="DC.Subject" xml:lang="en" content="Critical Production in Software Testing"/>
<meta name="DC.Subject" xml:lang="en" content="Risk Assesment"/>
<meta name="DC.Subject" xml:lang="en" content="UAT"/>
<meta name="DC.Subject" xml:lang="en" content="HyperText Transfer Protocol"/>
<meta name="DC.Subject" xml:lang="en" content="Integrated and Continous Deployment Pipelines"/>
<meta name="DC.Title" content="Software Testing using Multi-Collaboration Platforms"/>
<meta name="DC.Title.Alternative" xml:lang="uk" content=""/>
<meta name="DC.Type" content="Text.Serial.Journal"/>
<meta name="DC.Type.articleType" content="Articles"/>
<script>
    !function (t, e, c, n) {
        var s = e.createElement(c);
        s.async = 1, s.src = 'https://statics.esputnik.com/scripts/' + n + '.js';
        var r = e.scripts[0];
        r.parentNode.insertBefore(s, r);
        var f = function () {
            f.c(arguments);
        };
        f.q = [];
        f.c = function () {
            f.q.push(arguments);
        };
        t['eS'] = t['eS'] || f;
    }(window, document, 'script', 'FAEF998C8BB74C5592190EDC9860D11B');
</script><script>eS('init');</script>
	<link rel="stylesheet" href="https://ejsit-journal.com/index.php/ejsit/$$$call$$$/page/page/css?name=stylesheet" type="text/css" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css?v=3.1.2.4" type="text/css" /><link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:400,700|Noto+Serif:400,400i,700,700i" type="text/css" /><link rel="stylesheet" href="https://ejsit-journal.com/public/journals/1/styleSheet.css?v=3.1.2.4" type="text/css" />
</head>
<body class="pkp_page_article pkp_op_view has_site_logo" dir="ltr">

	<div class="cmp_skip_to_content">
		<a href="#pkp_content_main">Skip to main content</a>
		<a href="#pkp_content_nav">Skip to main navigation menu</a>
		<a href="#pkp_content_footer">Skip to site footer</a>
	</div>
	<div class="pkp_structure_page">

				<header class="pkp_structure_head" id="headerNavigationContainer" role="banner">
			<div class="pkp_head_wrapper">

				<div class="pkp_site_name_wrapper">
																<div class="pkp_site_name">
																								<a href="															https://ejsit-journal.com/index.php/index
													" class="is_img">
								<img src="https://ejsit-journal.com/public/journals/1/pageHeaderLogoImage_en_US.jpg" width="2559" height="256" alt="EJSIT" />
							</a>
																	</div>
									</div>

								
									<nav class="pkp_navigation_primary_row" aria-label="Site Navigation">
						<div class="pkp_navigation_primary_wrapper">
																				<ul id="navigationPrimary" class="pkp_navigation_primary pkp_nav_list">
								<li class="">
				<a href="http://ejsit-journal.com/index.php/ejsit">
					Home
				</a>
							</li>
								<li class="">
				<a href="https://ejsit-journal.com/index.php/ejsit/issue/current">
					Current
				</a>
							</li>
								<li class="">
				<a href="https://ejsit-journal.com/index.php/ejsit/issue/archive">
					Archives
				</a>
							</li>
								<li class="">
				<a href="https://ejsit-journal.com/index.php/ejsit/about/editorialTeam">
					Editorial Board
				</a>
							</li>
								<li class="">
				<a href="https://ejsit-journal.com/index.php/ejsit/indexing">
					Indexing/Abstracting
				</a>
							</li>
								<li class="">
				<a href="https://ejsit-journal.com/index.php/ejsit/about/submissions">
					For Authors
				</a>
							</li>
								<li class="">
				<a href="https://ejsit-journal.com/index.php/ejsit/about">
					About
				</a>
									<ul>
																					<li class="">
									<a href="https://ejsit-journal.com/index.php/ejsit/about">
										About the Journal
									</a>
								</li>
																												<li class="">
									<a href="https://ejsit-journal.com/index.php/ejsit/aims-and-scope">
										Aims & Scope
									</a>
								</li>
																												<li class="">
									<a href="https://ejsit-journal.com/index.php/ejsit/fee">
										Publication Fee
									</a>
								</li>
																												<li class="">
									<a href="https://ejsit-journal.com/index.php/ejsit/peer-review">
										Peer-Review Process
									</a>
								</li>
																												<li class="">
									<a href="https://ejsit-journal.com/index.php/ejsit/policies">
										Journal Policies
									</a>
								</li>
																												<li class="">
									<a href="https://ejsit-journal.com/index.php/ejsit/offer">
										Public Offer Agreement
									</a>
								</li>
																		</ul>
							</li>
								<li class="">
				<a href="https://ejsit-journal.com/index.php/ejsit/about/contact">
					Contact
				</a>
							</li>
			</ul>

				

																									
	<form class="pkp_search" action="https://ejsit-journal.com/index.php/ejsit/search/search" method="get" role="search">
		<input type="hidden" name="csrfToken" value="84b2043ce32d279695a686e7fd4ce33b">
				
			<input name="query" value="" type="text" aria-label="Search Query">
		

		<button type="submit">
			Search
		</button>
		<div class="search_controls" aria-hidden="true">
			<a href="https://ejsit-journal.com/index.php/ejsit/search/search" class="headerSearchPrompt search_prompt" aria-hidden="true">
				Search
			</a>
			<a href="#" class="search_cancel headerSearchCancel" aria-hidden="true"></a>
			<span class="search_loading" aria-hidden="true"></span>
		</div>
	</form>
													</div>
					</nav>
								
				<nav class="pkp_navigation_user_wrapper" id="navigationUserWrapper" aria-label="User Navigation">
						<ul id="navigationUser" class="pkp_navigation_user pkp_nav_list">
															<li class="profile">
				<a href="https://ejsit-journal.com/index.php/ejsit/login">
					Login
				</a>
							</li>
										</ul>

				</nav>
			</div><!-- .pkp_head_wrapper -->
		</header><!-- .pkp_structure_head -->

						<div class="pkp_structure_content has_sidebar">
			<div id="pkp_content_main" class="pkp_structure_main" role="main">

<div class="page page_article">
			<nav class="cmp_breadcrumbs" role="navigation" aria-label="You are here:">
	<ol>
		<li>
			<a href="https://ejsit-journal.com/index.php/ejsit/index">
				Home
			</a>
			<span class="separator">/</span>
		</li>
		<li>
			<a href="https://ejsit-journal.com/index.php/ejsit/issue/archive">
				Archives
			</a>
			<span class="separator">/</span>
		</li>
		<li>
			<a href="https://ejsit-journal.com/index.php/ejsit/issue/view/20">
				Vol. 4 No. 2 (2024)
			</a>
			<span class="separator">/</span>
		</li>
		<li class="current" aria-current="page">
			<span aria-current="page">
									Articles
							</span>
		</li>
	</ol>
</nav>
	
		<article class="obj_article_details">
	<h1 class="page_title">
		Software Testing using Multi-Collaboration Platforms
	</h1>

	
	<div class="row">
		<div class="main_entry">

							<ul class="item authors">
											<li>
							<span class="name">
								Sana Rizwan
							</span>
																				</li>
											<li>
							<span class="name">
								Mati ul Rehman
							</span>
																				</li>
											<li>
							<span class="name">
								Ayesha Tahir
							</span>
																				</li>
									</ul>
			
						
									<div class="item keywords">
				<span class="label">
										Keywords:
				</span>
				<span class="value">
																		Unit Testing Approach, 													System Testing Approach, 													Integration Testing Features, 													Acceptance Testing Capabilities, 													Testing Lifecycle Procedures, 													Critical Production in Software Testing, 													Risk Assesment, 													UAT, 													HyperText Transfer Protocol, 													Integrated and Continous Deployment Pipelines															</span>
			</div>
			
										<div class="item abstract">
					<h3 class="label">Abstract</h3>
					<p>Software applications become increasingly complex and competitive pressures intensify; the importance of quality assurance in software development cannot be overstated. Software testing plays a crucial role in the Software Development Lifecycle, necessitating the adoption of enhanced and efficient methodologies and techniques to ensure superior quality. This paper aims to explain and explore existing testing techniques to enhance quality assurance in software development processes by testing means. Various testing tools for backend and frontend applications are available to figure out the outcomes, but selection of the appropriate tool to find the concerned outcomes in software testing aspect is imperative. Loading, implementation, fetching results, extraction of the suitable fallouts is the major aim to the study.</p>
				</div>
			
			

																																	
										<div class="item references">
					<h3 class="label">
						References
					</h3>
					<div class="value">
													Awotar, M. & Sungkur, R. K. (2018). Optimization of Software Testing. International Conference on Computational Intelligence and Data Science (ICCIDS 2018). Procedia Computer Science, 132(2018), 1804–1814.<br />
Felderer, M., Haisjackl, C., Pekar, V., & Breu, R. (2014). A Risk Assessment Framework for Software Testing. In T. Margaria & B. Steffen (Eds.), Leveraging Applications of Formal Methods, Verification and Validation. Specialized Techniques and Applications. ISoLA 2014. Lecture Notes in Computer Science, vol 8803. Springer, Berlin, Heidelberg. https://doi.org/10.1007/978-3-662-45231-8_21 <br />
Quadri, S.M.K. & Farooq, S. U. (2010). Software Testing – Goals, Principles, and Limitations. International Journal of Computer Applications, 6(9), 7-10.<br />
Reid, S. (2012). The New Software Testing Standard. In C. Dale & T. Anderson (Eds.), Achieving Systems Safety. Springer, London. https://doi.org/10.1007/978-1-4471-2494-8_17
											</div>
				</div>
			
		</div><!-- .main_entry -->

		<div class="entry_details">

										<div class="item cover_image">
					<div class="sub_item">
													<a href="https://ejsit-journal.com/index.php/ejsit/issue/view/20">
								<img src="https://ejsit-journal.com/public/journals/1/cover_issue_20_en_US.jpg">
							</a>
											</div>
				</div>
			
										<div class="item galleys">
					<ul class="value galleys_links">
													<li>
								
	
		

<a class="obj_galley_link pdf" href="https://ejsit-journal.com/index.php/ejsit/article/view/399/375">

		
	PDF (ENGLISH)

	</a>
							</li>
											</ul>
				</div>
													<div class="item published">
					<div class="label">
						Published
					</div>
					<div class="value">
						2024-03-26
					</div>
				</div>
			
										<div class="item citation">
					<div class="sub_item citation_display">
						<div class="label">
							How to Cite
						</div>
						<div class="value">
							<div id="citationOutput" role="region" aria-live="polite">
								<div class="csl-bib-body">
  <div class="csl-entry">Rizwan, S., Rehman, M. ul, &#38; Tahir, A. (2024). Software Testing using Multi-Collaboration Platforms. <i>European Journal of Science, Innovation and Technology</i>, <i>4</i>(2), 81-91. Retrieved from https://ejsit-journal.com/index.php/ejsit/article/view/399</div>
</div>
							</div>
							<div class="citation_formats">
								<button class="cmp_button citation_formats_button" aria-controls="cslCitationFormats" aria-expanded="false" data-csl-dropdown="true">
									More Citation Formats
								</button>
								<div id="cslCitationFormats" class="citation_formats_list" aria-hidden="true">
									<ul class="citation_formats_styles">
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/acm-sig-proceedings?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/acm-sig-proceedings?submissionId=399&amp;return=json"
												>
													ACM
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/acs-nano?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/acs-nano?submissionId=399&amp;return=json"
												>
													ACS
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/apa?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/apa?submissionId=399&amp;return=json"
												>
													APA
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/associacao-brasileira-de-normas-tecnicas?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/associacao-brasileira-de-normas-tecnicas?submissionId=399&amp;return=json"
												>
													ABNT
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/chicago-author-date?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/chicago-author-date?submissionId=399&amp;return=json"
												>
													Chicago
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/harvard-cite-them-right?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/harvard-cite-them-right?submissionId=399&amp;return=json"
												>
													Harvard
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/ieee?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/ieee?submissionId=399&amp;return=json"
												>
													IEEE
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/modern-language-association?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/modern-language-association?submissionId=399&amp;return=json"
												>
													MLA
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/turabian-fullnote-bibliography?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/turabian-fullnote-bibliography?submissionId=399&amp;return=json"
												>
													Turabian
												</a>
											</li>
																					<li>
												<a
													aria-controls="citationOutput"
													href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/vancouver?submissionId=399"
													data-load-citation
													data-json-href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/get/vancouver?submissionId=399&amp;return=json"
												>
													Vancouver
												</a>
											</li>
																			</ul>
																			<div class="label">
											Download Citation
										</div>
										<ul class="citation_formats_styles">
																							<li>
													<a href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/download/ris?submissionId=399">
														<span class="fa fa-download"></span>
														Endnote/Zotero/Mendeley (RIS)
													</a>
												</li>
																							<li>
													<a href="https://ejsit-journal.com/index.php/ejsit/citationstylelanguage/download/bibtex?submissionId=399">
														<span class="fa fa-download"></span>
														BibTeX
													</a>
												</li>
																					</ul>
																	</div>
							</div>
						</div>
					</div>
				</div>
			
						<div class="item issue">
				<div class="sub_item">
					<div class="label">
						Issue
					</div>
					<div class="value">
						<a class="title" href="https://ejsit-journal.com/index.php/ejsit/issue/view/20">
							Vol. 4 No. 2 (2024)
						</a>
					</div>
				</div>

									<div class="sub_item">
						<div class="label">
							Section
						</div>
						<div class="value">
							Articles
						</div>
					</div>
							</div>

						
										<div class="item copyright">
																										<p>Copyright (c) 2024 Sana Rizwan, Mati ul Rehman, Ayesha Tahir</p>
														<a rel="license" href="https://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="//i.creativecommons.org/l/by/4.0/88x31.png" /></a><p>This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>
																
				</div>
			
			

		</div><!-- .entry_details -->
	</div><!-- .row -->

</article>

	

</div><!-- .page -->

	</div><!-- pkp_structure_main -->

									<div class="pkp_structure_sidebar left" role="complementary" aria-label="Sidebar">
				<div class="pkp_block block_custom" id="customblock-Flags">
	<div class="content">
		<p><a class="icon" href="https://ejsit-journal.com/index.php/journal/user/setLocale/en_US?source={$smarty.server.REQUEST_URI}"><img style="margin-left: 1px;" title="English" src="https://ejsit-journal.com/downloads/flag_en.png" alt="English" width="48" height="48"></a> <a class="icon" href="https://ejsit-journal.com/index.php/journal/user/setLocale/uk_UA?source={$smarty.server.REQUEST_URI}"><img style="margin-left: 10px;" title="Ukrainian" src="https://ejsit-journal.com/downloads/flag_ua.png" alt="Ukrainian" width="48" height="48"></a></p>
	</div>
</div>
<div class="pkp_block block_custom" id="customblock-ISSN">
	<div class="content">
		<p><img style="float: left; margin-right: 5px;" src="/downloads/issn-online.png">ISSN <strong><a title="ISSN" href="https://portal.issn.org/resource/ISSN/2786-4936" target="_blank" rel="noopener">2786-4936</a></strong> (Online)</p>
<p><img src="/downloads/issn-ua.png"></p>
	</div>
</div>
<div class="pkp_block block_make_submission">
	<div class="content">
		<a class="block_make_submission_link" href="https://ejsit-journal.com/index.php/ejsit/about/submissions">
			Make a Submission
		</a>
	</div>
</div>
<div class="pkp_block block_custom" id="customblock-Certificate">
	<div class="content">
		<p><a href="https://drive.google.com/file/d/1y8P9AEXqASmMMfOgzZIxhvCYAr3BA-JF/view?usp=sharing" target="_blank;"><img title="Certificate" src="/downloads/cert2022.jpg"></a></p>
<p><img title="Open Access" src="/downloads/oa2.png">&nbsp;</p>
	</div>
</div>
<div class="pkp_block block_information">
	<span class="title">Information</span>
	<div class="content">
		<ul>
							<li>
					<a href="https://ejsit-journal.com/index.php/ejsit/information/readers">
						For Readers
					</a>
				</li>
										<li>
					<a href="https://ejsit-journal.com/index.php/ejsit/information/authors">
						For Authors
					</a>
				</li>
										<li>
					<a href="https://ejsit-journal.com/index.php/ejsit/information/librarians">
						For Librarians
					</a>
				</li>
					</ul>
	</div>
</div>
<div class="pkp_block block_custom" id="customblock-Indexing">
	<div class="content">
		<p style="display: inline-block; color: rgba(0, 0, 0, 0.54); font-weight: bold; font-size: 90%; border-bottom: 3px solid #f7bc4a; text-transform: uppercase;">INDEXING/ABSTRACTING</p>
<p><a href="https://scholar.google.com/citations?user=TV8nlukAAAAJ" target="_blank" rel="noopener"><img title="Google Scholar" src="/downloads/gs2.png">&nbsp;</a></p>
<p><img title="BASE" src="/downloads/base.png">&nbsp;</p>
<p><img title="J-Gate" src="/downloads/J-Gate.png">&nbsp;</p>
<p><img title="IIJIF" src="/downloads/iijif.png">&nbsp;</p>
<p><img title="IJIFactor" src="/downloads/ijifactor.png">&nbsp;</p>
<p><img title="SJIF" src="/downloads/sjif.png">&nbsp;</p>
<p><img title="Databases" src="/downloads/4data.png">&nbsp;</p>
<p><img title="Databases2" src="/downloads/2data.png">&nbsp;</p>
	</div>
</div>
<div class="pkp_block block_Keywordcloud">
	<span class="title">Keywords</span>
	<div class="content" id='wordcloud'></div>
	<script>
	document.addEventListener("DOMContentLoaded", function() {
		d3.wordcloud()
			.size([300, 200])
			.selector('#wordcloud')
			.scale('linear')
			.fill(d3.scale.ordinal().range([ "#953255","#AA9139", "#2F3F73" , "#257059"]))
			.words([{"text":"Nigeria","size":16},{"text":"Artificial Intelligence","size":15},{"text":"Machine Learning","size":8},{"text":"COVID-19","size":7},{"text":"education","size":6},{"text":"Pig","size":6},{"text":"asphalt","size":6},{"text":"Digital Transformation","size":6},{"text":"Performance","size":6},{"text":"bitumen","size":5},{"text":"Religion","size":5},{"text":"social media","size":5},{"text":"Culture","size":5},{"text":"sustainability","size":5},{"text":"Communication","size":5},{"text":"Crude oil","size":4},{"text":"Public Health","size":4},{"text":"climate change","size":4},{"text":"performance","size":4},{"text":"Predictive Analytics","size":4},{"text":"Vitamin E","size":4},{"text":"Swine","size":4},{"text":"Philippines","size":4},{"text":"Artificial Intelligence (AI)","size":4},{"text":"GIS","size":4},{"text":"Maniema","size":3},{"text":"fertilizers","size":3},{"text":"Indonesia","size":3},{"text":"healthcare","size":3},{"text":"Solanum tuberosum","size":3},{"text":"Control","size":3},{"text":"benefits","size":3},{"text":"Kindu","size":3},{"text":"Employee Engagement","size":3},{"text":"Organizational Culture","size":3},{"text":"Education","size":3},{"text":"Social Media","size":3},{"text":"knowledge","size":3},{"text":"Environment","size":3},{"text":"Efficiency","size":3},{"text":"Obesity","size":3},{"text":"Africa","size":3},{"text":"Artificial Neural Network","size":3},{"text":"job satisfaction","size":3},{"text":"Globalization","size":3},{"text":"artificial intelligence","size":3},{"text":"Cellular Network","size":3},{"text":"Mobile","size":3},{"text":"degraded soil","size":3},{"text":"Pennisetum purpureum","size":3},{"text":"rhizogenesis","size":3},{"text":"Saudi Arabia","size":3},{"text":"Tocotrienols","size":3},{"text":"factors","size":3},{"text":"SVM","size":3},{"text":"Poultry","size":3},{"text":"urban design","size":3},{"text":"tourist destination","size":3},{"text":"digital marketing","size":3},{"text":"Bangladesh","size":3},{"text":"Gender","size":3},{"text":"Benin","size":3},{"text":"Vision 2030","size":3},{"text":"learning effectiveness","size":2},{"text":"Enzymes","size":2},{"text":"Cybersecurity","size":2},{"text":"soil","size":2},{"text":"design","size":2},{"text":"construction","size":2},{"text":"risk management","size":2},{"text":"Oreochromis niloticus","size":2},{"text":"blockchain","size":2},{"text":"Random Forest","size":2},{"text":"student","size":2},{"text":"deforestation","size":2},{"text":"Enterprise Architecture","size":2},{"text":"BIM","size":2},{"text":"Requirements","size":2},{"text":"Techniques","size":2},{"text":"Sustainability","size":2},{"text":"DEM","size":2},{"text":"Leib","size":2},{"text":"Blood parameters","size":2},{"text":"Rabbit","size":2},{"text":"UAV","size":2},{"text":"diarrheal","size":2},{"text":"Ontology","size":2},{"text":"ADC Sirikwa","size":2},{"text":"sustainable economic growth","size":2},{"text":"Garlic","size":2},{"text":"Generative AI","size":2},{"text":"Cloud Computing","size":2},{"text":"Artificial intelligence","size":2},{"text":"contamination","size":2},{"text":"attitude","size":2},{"text":"urbanization","size":2},{"text":"Blockchain","size":2},{"text":"Innovation","size":2},{"text":"conflict management","size":2},{"text":"Healthcare","size":2}])
			.onwordclick(function(d, i) {
				window.location = "https://ejsit-journal.com/index.php/ejsit/search?query=QUERY_SLUG".replace(/QUERY_SLUG/, encodeURIComponent('*'+d.text+'*'));
			})
			.start();
	});
	</script>
</div>
			</div><!-- pkp_sidebar.left -->
			</div><!-- pkp_structure_content -->

<div id="pkp_content_footer" class="pkp_structure_footer_wrapper" role="contentinfo">

	<div class="pkp_structure_footer">

					<div class="pkp_footer_content">
				<p>Copyright CC BY © European Journal of Science, Innovation and Technology (ISSN 2786-4936), 2021-2024</p>
<p><a href="http://creativecommons.org/licenses/by/4.0/" rel="license"><img style="border-width: 0;" src="https://i.creativecommons.org/l/by/4.0/88x31.png" alt="Лицензия Creative Commons"></a></p>
			</div>
		
		<div class="pkp_brand_footer" role="complementary">
			<a href="https://ejsit-journal.com/index.php/ejsit/about/aboutThisPublishingSystem">
				<img alt="About this Publishing System" src="https://ejsit-journal.com/templates/images/ojs_brand.png">
			</a>
		</div>
	</div>
</div><!-- pkp_structure_footer_wrapper -->

</div><!-- pkp_structure_page -->

<script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js?v=3.1.2.4" type="text/javascript"></script><script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js?v=3.1.2.4" type="text/javascript"></script><script src="https://ejsit-journal.com/lib/pkp/js/lib/jquery/plugins/jquery.tag-it.js?v=3.1.2.4" type="text/javascript"></script><script src="https://ejsit-journal.com/plugins/themes/default/js/lib/popper/popper.js?v=3.1.2.4" type="text/javascript"></script><script src="https://ejsit-journal.com/plugins/themes/default/js/lib/bootstrap/util.js?v=3.1.2.4" type="text/javascript"></script><script src="https://ejsit-journal.com/plugins/themes/default/js/lib/bootstrap/dropdown.js?v=3.1.2.4" type="text/javascript"></script><script src="https://ejsit-journal.com/plugins/themes/default/js/main.js?v=3.1.2.4" type="text/javascript"></script><script src="https://ejsit-journal.com/plugins/generic/citationStyleLanguage/js/articleCitation.js?v=3.1.2.4" type="text/javascript"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js?v=3.1.2.4" type="text/javascript"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/d3-cloud/1.0.0/d3.layout.cloud.min.js?v=3.1.2.4" type="text/javascript"></script><script src="https://ejsit-journal.com/plugins/blocks/keywordCloud/js/d3.wordcloud.min.js?v=3.1.2.4" type="text/javascript"></script>


</body>
</html>
`

//home endpoint
app.get('/', (req, res) => {

    res.end("hi ");
});
//users endpoint
app.get(`${SERVER}/users`, (req, res) => {
    console.log(req.locale);
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});