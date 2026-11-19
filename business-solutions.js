const businessPlans = {
  restaurant: {
    label: 'Restaurant, café or food business',
    challenge: 'People may not find the menu, location or ordering details quickly. The business may also need more repeat visits and a clearer way to promote specials.',
    services: [['Local SEO', 'Make accurate location, opening hours, menu and contact details easier to discover in local searches.'], ['Website design', 'Present the menu, location, key details and a simple call, booking or ordering action in one mobile-friendly place.'], ['Social media marketing', 'Plan useful food, offer and behind-the-scenes content, then respond to customer questions consistently.'], ['PPC and social advertising', 'Promote a specific offer or location to a relevant nearby audience, with a clear budget and measurable action.'], ['Email and WhatsApp automation', 'With permission, share updates and route common enquiries; keep a person available for special requests.'], ['Creative services', 'Create genuine photos, short videos and graphics that show the actual food, venue and offers.']],
    process: ['Confirm service area, audience, menu or offer, ordering method and business priorities.', 'Improve the core information first: website, local listing, contact paths and approved brand assets.', 'Plan content or a small campaign, set a budget and define how calls, bookings or orders will be measured.', 'Review enquiries and campaign data, then refine the plan based on what customers actually use.'],
    outputs: ['Mobile-friendly menu or landing page outline', 'Local listing and on-page SEO checklist', 'Content and offer calendar', 'Campaign plan with budget and tracking actions'],
    metrics: 'Track calls, direction requests, menu visits, booking or order clicks, enquiry volume and repeat-customer activity.'
  },
  education: {
    label: 'School, college or education institute',
    challenge: 'Families and learners need clear course information, eligibility, fees, dates and a reliable admission enquiry path. Important details can be spread across multiple channels.',
    services: [['Website design', 'Organize courses, admissions, schedules, FAQs and contact details so learners can find key information.'], ['SEO and content marketing', 'Create useful pages around courses, locations and common learner questions, with accurate and reviewed information.'], ['Social media and video', 'Share campus updates, learning resources, events and genuine student or faculty content with permission.'], ['PPC and lead generation', 'Reach audiences interested in specific courses and direct them to a clear enquiry or application page.'], ['Email marketing', 'Send permission-based updates about open days, application dates and course information.'], ['Lead automation', 'Route enquiries by course or campus, send acknowledgements and assign a staff follow-up task.']],
    process: ['List programmes, audience groups, locations, admission dates and the most common questions.', 'Organize accurate course pages and a simple enquiry or application journey.', 'Plan search, social or paid promotion around verified dates, audience needs and available capacity.', 'Review enquiry quality and follow-up time with the admissions team; update information as programmes change.'],
    outputs: ['Course and admissions page structure', 'Content topics and publishing plan', 'Campaign and lead form outline', 'Enquiry routing and follow-up workflow'],
    metrics: 'Review qualified enquiries, page visits to key course pages, application starts, event registrations and follow-up times. Do not promise admission outcomes.'
  },
  healthcare: {
    label: 'Clinic, healthcare or wellness',
    challenge: 'People need trustworthy, accurate information, clear hours and an easy way to contact or book. Sensitive claims and personal health details require careful handling.',
    services: [['Website and local SEO', 'Keep services, location, hours and appointment details clear and accessible on mobile.'], ['Content marketing', 'Prepare educational information from qualified sources and have the appropriate professional review it.'], ['Search advertising', 'Plan campaigns around permitted services and accurate language, following platform and local rules.'], ['Branding and creative', 'Use a consistent, calm visual identity and clear service information without unsupported claims.'], ['Booking and enquiry automation', 'Route appointment requests and basic administrative questions, with a direct handoff to staff.']],
    process: ['Confirm the services, audience, service area and who reviews public information.', 'Check privacy, consent and applicable advertising rules before collecting or promoting sensitive details.', 'Make contact, booking and service information simple to find.', 'Review enquiries and user feedback without exposing private health information in marketing reports.'],
    outputs: ['Service and contact page plan', 'Local search information checklist', 'Reviewed content and campaign brief', 'Privacy-aware appointment enquiry flow'],
    metrics: 'Measure appointment enquiries, calls and booking-path completion using privacy-conscious reporting. Avoid medical outcome or cure claims.'
  },
  retail: {
    label: 'Retail shop or e-commerce brand',
    challenge: 'Customers need to understand products, compare options, trust the store and complete a purchase with little friction. Product details or campaign tracking may be incomplete.',
    services: [['E-commerce website', 'Present products, categories, delivery details and checkout steps in a clear mobile-friendly store.'], ['SEO and content', 'Improve product and category information so shoppers can find and understand relevant items.'], ['PPC and social advertising', 'Promote selected products or offers with suitable creative, audience settings and campaign tracking.'], ['Email marketing', 'Send permission-based product updates, order information or relevant promotions.'], ['Branding and creative', 'Create consistent product imagery, graphics and messaging across the store and campaigns.'], ['Analytics and automation', 'Track key shopping steps and route routine customer questions to the right support channel.']],
    process: ['Review product range, customer questions, delivery and return policies, and the current purchase path.', 'Improve priority product pages, brand consistency and mobile checkout details.', 'Launch a focused campaign for selected products with agreed spend and tracking.', 'Review visits, add-to-cart activity, completed orders and customer questions before expanding.'],
    outputs: ['Store and product-page improvement list', 'Product content and creative brief', 'Campaign tracking plan', 'Email and customer support workflow'],
    metrics: 'Review qualified product visits, add-to-cart activity, checkout completion, sales and return or support patterns.'
  },
  realestate: {
    label: 'Real estate, construction or interiors',
    challenge: 'Customers want trustworthy project details, location, timelines and a direct way to arrange a viewing or consultation. Leads often need a timely, organized follow-up.',
    services: [['Website and landing pages', 'Present services, projects, locations and enquiry actions in a clear structure.'], ['Local SEO and content', 'Organize location and project information and answer common buyer or renovation questions accurately.'], ['PPC and social advertising', 'Promote specific services or properties to selected locations and audiences, subject to ad platform rules.'], ['Video and graphic design', 'Prepare project walkthroughs, process explainers and visual updates using genuine material.'], ['Lead automation', 'Route enquiries by project or service and remind the team to follow up.']],
    process: ['Confirm locations, audience, current inventory or project details, and what information can be published.', 'Build clear project pages and define viewing or consultation enquiry steps.', 'Plan local content and campaign targeting around the actual service area.', 'Review enquiry source, response speed and viewing or consultation requests.'],
    outputs: ['Project or service page outline', 'Local content and campaign plan', 'Lead capture and routing workflow', 'Creative brief for approved property media'],
    metrics: 'Track qualified enquiries, calls, viewing requests and response times. Clearly disclose factual property information and avoid guaranteed investment claims.'
  },
  hospitality: {
    label: 'Hotel, travel or hospitality',
    challenge: 'Travelers compare location, facilities, availability and booking terms. Businesses need consistent information and a simple path from discovery to an enquiry or booking.',
    services: [['Website and local SEO', 'Present rooms, experiences, location, facilities and contact or booking details clearly.'], ['Content and video', 'Show genuine destinations, spaces and services with practical visitor information.'], ['Search and social advertising', 'Promote relevant dates or packages with clear terms, audience settings and budget limits.'], ['Email marketing', 'Share useful updates or offers with subscribers who have chosen to receive them.'], ['Reviews and reputation support', 'Create a respectful process for requesting honest guest feedback and responding professionally.']],
    process: ['Confirm the property or travel offer, audience, seasons, availability and booking method.', 'Check website information, location details and booking path for clarity.', 'Plan content or campaigns around actual availability and clear offer terms.', 'Review enquiries, booking clicks and guest questions; adjust information when details change.'],
    outputs: ['Booking-path and website review', 'Seasonal content calendar', 'Campaign and offer brief', 'Guest feedback response guide'],
    metrics: 'Review booking enquiries, booking clicks, calls, occupancy-related campaign actions and guest feedback themes.'
  },
  professional: {
    label: 'Professional or consulting services',
    challenge: 'Potential clients need to understand the expertise, scope, process and next step. Service descriptions can sound too broad or fail to answer trust and fit questions.',
    services: [['Website and branding', 'Explain services, audience, process and contact options with a consistent professional identity.'], ['SEO and content', 'Answer real client questions with useful, accurate pages and articles.'], ['LinkedIn and social media', 'Share expertise and company updates in a professional, audience-appropriate way.'], ['PPC and lead generation', 'Promote a defined service to relevant audiences and direct prospects to a focused page.'], ['Email and CRM workflows', 'Organize permission-based follow-ups and route enquiries to the right person.']],
    process: ['Clarify ideal client types, service boundaries, proof you can share and desired enquiry type.', 'Build service pages that explain scope, approach, timeline assumptions and next steps.', 'Plan content and promotion around specific services rather than vague claims.', 'Review enquiry fit and update messaging based on real client questions.'],
    outputs: ['Service-page messaging outline', 'Content and channel plan', 'Lead form and follow-up flow', 'Campaign report around agreed enquiry measures'],
    metrics: 'Track qualified enquiries, consultation bookings, referral traffic and follow-up. Regulated professions should follow their applicable advertising rules.'
  },
  b2b: {
    label: 'B2B, manufacturing or logistics',
    challenge: 'Business buyers need clear product specifications, capabilities, service areas, compliance details and a dependable way to request a quote. Buying decisions may take time.',
    services: [['B2B website and SEO', 'Organize product, capability, sector and service-area information for buyers and procurement teams.'], ['Content marketing', 'Prepare useful explainers, product guides and case material based only on verified facts and approved client examples.'], ['LinkedIn and PPC', 'Reach selected business audiences with clear messages and a suitable enquiry destination.'], ['Branding and creative', 'Present capabilities, product ranges and company information consistently.'], ['Lead automation and email', 'Route quote requests and support permission-based updates or sales follow-up tasks.']],
    process: ['Map buyer roles, products, service areas, sales stages and the details a quote needs.', 'Improve capability pages, product information and enquiry forms.', 'Plan search or professional-network campaigns for specific sectors and offers.', 'Review enquiry quality, source and follow-up time with the sales team.'],
    outputs: ['Capability and product-page structure', 'Buyer-focused content plan', 'B2B campaign and landing-page brief', 'Quote request routing workflow'],
    metrics: 'Review relevant company visits, qualified quote requests, sales conversations and source attribution over a realistic buying cycle.'
  },
  beauty: {
    label: 'Salon, spa or beauty business',
    challenge: 'Customers want to see services, prices, location, availability and genuine examples before booking. The business may need more local discovery and repeat appointments.',
    services: [['Local SEO', 'Keep services, hours, location and booking details visible and accurate for nearby customers.'], ['Website and booking path', 'Show service menus, preparation details and a simple appointment enquiry action.'], ['Social media and creative', 'Plan genuine work examples, service explainers and updates with customer permission.'], ['Local advertising', 'Promote available services or offers to a relevant nearby audience with clear terms.'], ['Email or WhatsApp reminders', 'Support opt-in appointment updates and follow-up using suitable business tools.']],
    process: ['Confirm services, prices, locations, booking availability and permissions for photos.', 'Make service details and appointment requests easy to find.', 'Prepare a consistent content plan and local campaign if useful.', 'Review calls, bookings and repeat appointment activity.'],
    outputs: ['Service menu and booking page outline', 'Local listing checklist', 'Photo and content brief', 'Appointment follow-up workflow'],
    metrics: 'Track appointment enquiries, booking clicks, calls and repeat visits. Get consent before using identifiable customer photos.'
  },
  fitness: {
    label: 'Gym, sports or fitness business',
    challenge: 'People need to compare programmes, schedules, location and membership options. New enquiries may need a trial booking or a clear follow-up.',
    services: [['Website and local SEO', 'Present programmes, timetable, location, membership details and trial options.'], ['Social media and video', 'Share class information, trainer introductions and genuine training content.'], ['Lead campaigns', 'Promote a trial session or programme to a relevant area with clear eligibility and terms.'], ['Email and automation', 'Route trial requests and send agreed reminders or programme updates.'], ['Branding and creative', 'Keep class materials, social posts and membership information visually consistent.']],
    process: ['Confirm target members, programmes, schedule, capacity and the next step for new enquiries.', 'Improve class and membership information and build a simple trial request path.', 'Create real, permission-based content and plan a campaign if suitable.', 'Review trial enquiries, attendance and membership follow-up.'],
    outputs: ['Programme and membership page plan', 'Class content calendar', 'Trial campaign outline', 'Enquiry reminder workflow'],
    metrics: 'Review trial bookings, attendance, membership enquiries and response times. Avoid unsupported health or body-transformation promises.'
  },
  localservices: {
    label: 'Home or local services',
    challenge: 'Customers need to know which areas you cover, what work you do, when you are available and how to request a quote.',
    services: [['Local SEO and website', 'Make service areas, hours, phone number and quote request details easy to find.'], ['Content marketing', 'Explain common service questions, preparation steps and what customers can expect.'], ['Search and social advertising', 'Reach nearby customers looking for a specific service, with a clear contact action.'], ['Branding and creative', 'Present service vehicles, staff and real completed work consistently, with permission.'], ['Lead automation', 'Collect the details needed for a quote and route them to the right team member.']],
    process: ['Define service types, coverage area, capacity and what details are needed for a quote.', 'Publish accurate service pages and an easy call or enquiry action.', 'Plan local search and campaign targeting around the actual coverage area.', 'Review enquiry quality, missed calls and time to quote.'],
    outputs: ['Service-area page outline', 'Local search checklist', 'Quote form fields and routing plan', 'Campaign tracking actions'],
    metrics: 'Track calls, quote requests, service-area fit, response time and booked jobs.'
  },
  events: {
    label: 'Events or creative business',
    challenge: 'People need to quickly understand the event or creative offer, date, audience, pricing and how to register or enquire.',
    services: [['Landing page and branding', 'Bring the event or creative offer details together with clear registration or booking steps.'], ['Social media and video', 'Build interest with a content schedule, previews and genuine behind-the-scenes material.'], ['Paid promotion', 'Promote to relevant audiences and locations with the event date and terms clearly shown.'], ['Email marketing', 'Send opt-in announcements, practical reminders and post-event updates.'], ['Creative services', 'Prepare consistent graphics, short videos and promotional assets.']],
    process: ['Confirm event details, capacity, audience, registration platform and timeline.', 'Create the main information page and campaign assets.', 'Schedule promotion and opt-in reminders around key dates.', 'Review registrations and inquiries, then share updates if details change.'],
    outputs: ['Event landing-page outline', 'Promotion calendar', 'Creative asset list', 'Registration and reminder flow'],
    metrics: 'Review registrations, ticket or booking actions, attendance and campaign cost per registration.'
  },
  nonprofit: {
    label: 'NGO or community organization',
    challenge: 'People need to understand the mission, local work, ways to participate and how funds or support are used. Trust and accurate reporting are essential.',
    services: [['Website and content', 'Explain the mission, programmes, updates and ways to help in plain language.'], ['SEO and local visibility', 'Help people discover relevant programmes and community information.'], ['Social media and video', 'Share approved, respectful updates and stories with informed permission.'], ['Email marketing', 'Send opt-in newsletters, volunteer updates and transparent campaign information.'], ['Branding and creative', 'Create consistent campaign and information materials.']],
    process: ['Confirm the audience, mission, programme facts, consent process and desired action.', 'Organize clear pages for work, participation and transparent support options.', 'Create a content calendar using approved stories and imagery.', 'Review engagement and enquiries while protecting community members’ privacy.'],
    outputs: ['Mission and programme page outline', 'Content and consent checklist', 'Volunteer or supporter enquiry flow', 'Campaign reporting plan'],
    metrics: 'Track volunteer enquiries, event registrations, newsletter engagement and relevant participation actions. Do not imply unverified impact.'
  },
  technology: {
    label: 'Technology, SaaS or startup',
    challenge: 'Potential users need to understand the product, use case, value, pricing and onboarding steps. Teams also need to learn which channels bring qualified interest.',
    services: [['Website and landing pages', 'Explain product use cases, features, pricing assumptions and next steps clearly.'], ['SEO and content marketing', 'Create useful comparison, product and problem-solving content for the intended audience.'], ['PPC and social campaigns', 'Test focused messages and landing pages for a defined audience or product action.'], ['Branding and creative', 'Build a clear product identity and useful demos or graphics.'], ['Email and automation', 'Support opt-in onboarding, product updates and lead routing with suitable safeguards.'], ['Analytics and AI support', 'Set up agreed funnel measures and use AI-assisted analysis with human review.']],
    process: ['Identify the user, use case, product stage and main action to measure.', 'Clarify the website message and remove friction from the demo, trial or contact path.', 'Test a small number of audience and message combinations with clear tracking.', 'Review qualified sign-ups, activation signals and user questions before expanding.'],
    outputs: ['Positioning and landing-page brief', 'Content and campaign hypotheses', 'Event tracking plan', 'Lead or onboarding automation outline'],
    metrics: 'Review qualified sign-ups, demo requests, activation steps and cost per qualified action rather than traffic alone.'
  },
  automotive: {
    label: 'Automotive business',
    challenge: 'Customers compare models, services, availability, location and after-sales support. They need a direct way to call, book a test drive or request service.',
    services: [['Website and local SEO', 'Present vehicle or service details, location, hours and calls to action accurately.'], ['Search and social advertising', 'Promote available products, test drives or service slots with clear terms.'], ['Video and graphics', 'Create genuine vehicle walkarounds, service explainers and campaign assets.'], ['Lead routing', 'Send model, test-drive or service enquiries to the right team member.'], ['Email marketing', 'Share opt-in maintenance reminders or business updates where appropriate.']],
    process: ['Confirm inventory or service availability, audience, location and enquiry owner.', 'Organize product or service information and the relevant call, test-drive or booking path.', 'Launch carefully scoped promotions with current offers and clear terms.', 'Review enquiry source, response times and booked visits.'],
    outputs: ['Vehicle or service page outline', 'Campaign and creative brief', 'Lead routing plan', 'Enquiry reporting measures'],
    metrics: 'Track calls, qualified model enquiries, test-drive or service bookings and follow-up speed.'
  },
  financelegal: {
    label: 'Finance, accounting or legal practice',
    challenge: 'Clients need accurate, understandable service information and confidence about the professional process. Public communication may be subject to strict industry rules.',
    services: [['Website and content', 'Explain service scope, process and contact steps in clear language reviewed by the practice.'], ['SEO and local visibility', 'Organize accurate pages around the practice’s actual services and service area.'], ['Branding and creative', 'Maintain a consistent professional identity and accessible information materials.'], ['Email and enquiry routing', 'Organize opt-in updates and route enquiries without exposing confidential information.'], ['Analytics', 'Measure page and enquiry activity using privacy-conscious settings.']],
    process: ['Confirm permitted marketing claims, target clients, service boundaries and review responsibility.', 'Prepare accurate service pages and clear consultation enquiry steps.', 'Set up content or local discovery work that follows applicable professional rules.', 'Review enquiries and website use without putting confidential details into analytics.'],
    outputs: ['Service-page and FAQ outline', 'Local visibility checklist', 'Privacy-aware enquiry workflow', 'Content review process'],
    metrics: 'Review relevant enquiries, consultation requests and page usefulness. Follow all applicable professional advertising and confidentiality rules.'
  },
  other: {
    label: 'Your business',
    challenge: 'Different businesses have different customers, offers and barriers. A useful plan starts with the people you serve and the action you want them to take.',
    services: [['Website and branding', 'Explain your real offer and make the next step easy to find.'], ['SEO and content', 'Answer the questions your customers actually ask.'], ['Social media and creative', 'Share useful, accurate updates in the channels your audience uses.'], ['Advertising and lead generation', 'Test a focused campaign with a clear audience, budget and enquiry path.'], ['Email and automation', 'Organize permission-based follow-up and repetitive tasks where it is suitable.']],
    process: ['Describe your customers, service area, offer and the main challenge.', 'Choose one or two services that address the most urgent gap.', 'Agree on scope, required materials, budget and practical measures.', 'Review what customers do and adjust the plan using real feedback.'],
    outputs: ['Business and audience discovery notes', 'Recommended service shortlist', 'Simple project sequence', 'Measures to review after launch'],
    metrics: 'Choose measures that match your goal, such as relevant enquiries, bookings, sales, repeat visits or time saved.'
  }
};

const picker = document.getElementById('businessPicker');
const result = document.getElementById('solutionResult');
const businessNameField = document.getElementById('businessName');
const businessTypeField = document.getElementById('businessType');
const businessGoalField = document.getElementById('businessGoal');
const otherBusinessTypeWrap = document.getElementById('otherBusinessTypeWrap');
const otherBusinessTypeField = document.getElementById('otherBusinessType');
const industryButtons = document.querySelectorAll('.industry-chip[data-business-type]');
const industryDetailsResult = document.getElementById('industryDetailsResult');

function appendText(parent, tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  node.textContent = text;
  parent.append(node);
  return node;
}

function appendList(parent, items, className = '') {
  const list = document.createElement('ul');
  if (className) list.className = className;
  items.forEach(item => appendText(list, 'li', '', item));
  parent.append(list);
}

function showPlaceholder(target, title, description) {
  target.replaceChildren();
  const empty = document.createElement('div');
  empty.className = 'result-empty';
  appendText(empty, 'span', 'result-icon', '✦');
  appendText(empty, 'h2', '', title);
  appendText(empty, 'p', '', description);
  target.append(empty);
}

function serviceAnchor(serviceName) {
  const name = serviceName.toLowerCase();
  if (name.includes('seo')) return 'services.html#seo-services';
  if (name.includes('ppc') || name.includes('advertising') || name.includes('paid')) return 'services.html#ppc-services';
  if (name.includes('website') || name.includes('web')) return 'services.html#web-services';
  if (name.includes('social')) return 'services.html#social-services';
  if (name.includes('brand')) return 'services.html#brand-services';
  if (name.includes('content')) return 'services.html#content-services';
  if (name.includes('email')) return 'services.html#email-services';
  if (name.includes('creative') || name.includes('video')) return 'services.html#creative-services';
  if (name.includes('automation')) return 'services.html#automation-services';
  return 'services.html';
}

function renderPlan(plan, businessName, goalValue, goalLabel, target = result) {
  target.replaceChildren();
  const header = document.createElement('div');
  header.className = 'result-header';
  appendText(header, 'div', 'eyebrow', 'YOUR STARTING PLAN');
  appendText(header, 'h2', '', businessName ? `A digital starting plan for ${businessName}` : `A digital starting plan for ${plan.label}`);
  appendText(header, 'p', '', `Business type: ${plan.label}. This is a tailored starting point to discuss, not a guarantee of results.`);
  target.append(header);

  const challenges = document.createElement('section');
  challenges.className = 'result-block';
  appendText(challenges, 'h3', '', 'Common things to improve');
  appendText(challenges, 'p', '', plan.challenge);
  target.append(challenges);

  const selectedServices = document.createElement('section');
  selectedServices.className = 'result-block';
  appendText(selectedServices, 'h3', '', 'Services that may fit');
  const serviceGrid = document.createElement('div');
  serviceGrid.className = 'recommendation-grid';
  plan.services.forEach(([name, description]) => {
    const card = document.createElement('article');
    card.className = 'recommendation-card';
    const link = document.createElement('a');
    link.href = serviceAnchor(name);
    link.textContent = name;
    card.append(link);
    appendText(card, 'p', '', description);
    serviceGrid.append(card);
  });
  selectedServices.append(serviceGrid);
  target.append(selectedServices);

  const process = document.createElement('section');
  process.className = 'result-block';
  appendText(process, 'h3', '', 'How we could work through it');
  appendList(process, plan.process, 'numbered-list');
  target.append(process);

  const deliverables = document.createElement('section');
  deliverables.className = 'result-block deliverable-block';
  appendText(deliverables, 'h3', '', 'Possible deliverables');
  appendList(deliverables, plan.outputs);
  target.append(deliverables);

  const outcome = document.createElement('section');
  outcome.className = 'result-block outcome-block';
  appendText(outcome, 'h3', '', 'What to measure');
  appendText(outcome, 'p', '', plan.metrics);
  const goalGuidance = {
    visibility: 'improve local search information, useful service content and consistent brand visibility.',
    leads: 'make the enquiry path simple and agree how the team will respond to each request.',
    lead_generation: 'connect audience targeting, a focused landing page, useful form fields and follow-up tracking.',
    sales: 'align product or service pages, the offer, checkout or contact steps and campaign tracking.',
    brand: 'clarify the main message and apply consistent visuals and wording across key channels.',
    retention: 'send relevant updates to opted-in customers and make repeat actions easy.',
    efficiency: 'map one repetitive task, confirm the tools and add a human check where needed.'
  };
  if (goalValue) appendText(outcome, 'p', 'goal-note', `You selected “${goalLabel}”. A useful first focus is to ${goalGuidance[goalValue]}`);
  target.append(outcome);

  const note = document.createElement('p');
  note.className = 'results-note';
  note.textContent = 'Actual business growth depends on your offer, market, budget, operations and customer response. We would agree on a realistic scope and measures before starting.';
  target.append(note);

  const cta = document.createElement('a');
  cta.className = 'btn blue result-cta';
  cta.href = 'index.html#inquiry';
  cta.textContent = 'Discuss This Plan →';
  target.append(cta);
}

function getSelectedPlan() {
  const customType = otherBusinessTypeField.value.trim();
  return businessTypeField.value === 'other' && customType
    ? { ...businessPlans.other, label: customType }
    : (businessPlans[businessTypeField.value] || businessPlans.other);
}

function getSelectedGoalLabel() {
  return businessGoalField.options[businessGoalField.selectedIndex]?.textContent || '';
}

function syncIndustryButtons() {
  industryButtons.forEach(button => {
    const selected = button.dataset.businessType === businessTypeField.value;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

picker?.addEventListener('submit', event => {
  event.preventDefault();
  if (!picker.reportValidity()) return;
  showPlaceholder(industryDetailsResult, 'Choose an industry', 'Select an industry below to see a tailored support plan there.');
  renderPlan(getSelectedPlan(), businessNameField.value.trim(), businessGoalField.value, getSelectedGoalLabel());
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

businessTypeField?.addEventListener('change', () => {
  const isOther = businessTypeField.value === 'other';
  otherBusinessTypeWrap.hidden = !isOther;
  otherBusinessTypeField.required = isOther;
  if (!isOther) otherBusinessTypeField.value = '';
  syncIndustryButtons();
  showPlaceholder(result, 'Your business plan will appear here', 'Select a business type and we’ll map out relevant services, the steps we could take and the deliverables to discuss.');
  showPlaceholder(industryDetailsResult, 'Choose an industry', 'Select an industry below to see a tailored support plan there.');
});

industryButtons.forEach(button => {
  button.addEventListener('click', () => {
    businessTypeField.value = button.dataset.businessType;
    businessTypeField.dispatchEvent(new Event('change', { bubbles: true }));
    renderPlan(getSelectedPlan(), businessNameField.value.trim(), businessGoalField.value, getSelectedGoalLabel(), industryDetailsResult);
    industryDetailsResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
