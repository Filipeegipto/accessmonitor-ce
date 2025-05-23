export const locale_en = {
  'act-rules': {
    'QW-ACT-R1': {
      name: 'HTML Page has a title',
      description: 'This rule checks that the HTML page has a title.',
      results: {
        I1: 'No test targets found.',
        P1: "The `title` element exists and it's not empty ('').",
        F1: "The `title` element doesn't exist.",
        F2: "The `title` element is empty ('').",
        F3: 'The `title` element is not in the same context.'
      }
    },
    'QW-ACT-R2': {
      name: 'HTML has lang attribute',
      description: 'This rule checks that the html element has a non-empty lang or xml:lang attribute.',
      results: {
        I1: 'No test targets found.',
        P1: 'The `lang` attribute exists and has a value.',
        F1: "The `lang` attribute doesn't exist or is empty ('')."
      }
    },
    'QW-ACT-R3': {
      name: 'HTML lang and xml:lang match',
      description:
        'The rule checks that for the html element, there is no mismatch between the primary language in non-empty lang and xml:lang attributes, if both are used.',
      results: {
        I1: 'No test targets found.',
        P1: 'The `lang` and `xml:lang` attributes have the same value.',
        F1: "The `lang` and `xml:lang` attributes don't have the same value."
      }
    },
    'QW-ACT-R4': {
      name: 'Meta-refresh no delay',
      description: 'This rule checks that the meta element is not used for delayed redirecting or refreshing.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target refreshes/redirects immediately.',
        P2: 'The test target refreshes/redirects after more than 20 hours.',
        F1: 'The test target refreshes after {seconds} seconds.',
        F2: 'The test target redirects after {seconds} seconds.'
      }
    },
    'QW-ACT-R5': {
      name: 'Validity of HTML Lang attribute',
      description: 'This rule checks the lang or xml:lang attribute has a valid language subtag.',
      results: {
        I1: 'No test targets found.',
        P1: 'The `lang` attribute has a valid value.',
        F1: 'The `lang` attribute does not have a valid value.'
      }
    },
    'QW-ACT-R6': {
      name: 'Image button has accessible name',
      description: 'This rule checks that each image button element has an accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has an accessible name.',
        F1: "The test target doesn't have an accessible name."
      }
    },
    'QW-ACT-R7': {
      name: 'Orientation of the page is not restricted using CSS transform property',
      description:
        'This rule checks that page content is not restricted to either landscape or portrait orientation using CSS transform property.',
      results: {
        I1: 'No test targets found.',
        P1: 'A page where CSS transform property has rotateZ transform function conditionally applied on the orientation media feature which does not restrict the element to either portrait or landscape orientation.',
        F1: 'A page where CSS transform property has rotate transform function conditionally applied on the orientation media feature which restricts the element to landscape orientation.'
      }
    },
    'QW-ACT-R9': {
      name: 'Links with identical accessible names have equivalent purpose',
      description:
        'This rule checks that links with identical accessible names resolve to the same resource or equivalent resources.',
      results: {
        I1: 'No test targets found.',
        P1: 'The `links` with the same accessible name have equal content.',
        F1: 'The `links` with the same accessible name have different content. Verify is the content is equivalent.'
      }
    },
    'QW-ACT-R10': {
      name: '`iframe` elements with identical accessible names have equivalent purpose',
      description:
        'This rule checks that `iframe` elements with identical accessible names embed the same resource or equivalent resources.',
      results: {
        I1: 'No test targets found.',
        P1: 'The `iframes` with the same accessible name have equal content.',
        F1: 'The `iframes` with the same accessible name have different content.'
      }
    },
    'QW-ACT-R11': {
      name: 'Button has accessible name',
      description: 'This rule checks that each button element has an accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has an accessible name.',
        F1: "The test target doesn't have an accessible name, or it's empty ('')."
      }
    },
    'QW-ACT-R12': {
      name: 'Link has accessible name',
      description: 'This rule checks that each link has an accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has an accessible name.',
        F1: "The test target doesn't have an accessible name, or it's empty ('')."
      }
    },
    'QW-ACT-R13': {
      name: 'Element with `aria-hidden` has no focusable content',
      description: 'This rule checks that elements with an aria-hidden attribute do not contain focusable elements.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target children are not focusable.',
        P2: 'The test target is not focusable.',
        F1: 'The test target has focusable children.',
        F2: 'This test target is focusable.'
      }
    },
    'QW-ACT-R14': {
      name: 'meta viewport does not prevent zoom',
      description: 'This rule checks that the meta element retains the user agent ability to zoom.',
      results: {
        I1: 'No test targets found.',
        P1: "The `meta` element with a `name='viewport'` attribute doesn't define the `maximum-scale` and `user-scalable` values.",
        P2: "The `meta` element with a `name='viewport'` attribute retains the user agent ability to zoom.",
        F1: "The `meta` element with a `name='viewport'` attribute abolishes the user agent ability to zoom with user-scalable=no or maximum-scale < 2."
      }
    },
    'QW-ACT-R15': {
      name: 'audio or video has no audio that plays automatically',
      description:
        'This rule checks that auto-play audio does not last for more than 3 seconds, or the audio has a control mechanism to stop or mute it.',
      results: {
        I1: 'No test targets found.',
        P1: 'The rule passed because of the rule ',
        W1: "The rule can't tell because of the rule ",
        F1: 'The rule failed because of the rule '
      }
    },
    'QW-ACT-R16': {
      name: 'Form control has accessible name',
      description: 'Form control has accessible name',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has an accessible name.',
        F1: "The test target accessible name doesn't exist or it's empty ('')."
      }
    },
    'QW-ACT-R17': {
      name: 'Image has accessible name',
      description: 'This rule checks that each image that is not marked as decorative, has an accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target is decorative.',
        P2: 'The test target has an accessible name.',
        F1: "The test target doesn't have an accessible name."
      }
    },
    'QW-ACT-R18': {
      name: '`id` attribute value is unique',
      description: 'This rule checks that all id attribute values on a single page are unique.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a unique `id` attribute.',
        F1: 'Several elements have the same `id` attribute.'
      }
    },
    'QW-ACT-R19': {
      name: 'iframe element has accessible name',
      description: 'This rule checks that each iframe element has an accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has an accessible name.',
        F1: "The test target accessible name doesn't exist or it's empty ('')."
      }
    },
    'QW-ACT-R20': {
      name: 'role attribute has valid value',
      description: 'This rule checks that each role attribute has a valid value.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a valid `role` attribute.',
        F1: 'The test target has an invalid `role` attribute.'
      }
    },
    'QW-ACT-R21': {
      name: 'svg element with explicit role has accessible name',
      description:
        'This rule checks that each SVG image element that is explicitly included in the accessibility tree has an accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has an accessible name.',
        F1: "The test target accessible name doesn't exist or it's empty ('')."
      }
    },
    'QW-ACT-R22': {
      name: 'Element within body has valid lang attribute',
      description:
        'This rule checks that the lang attribute of an element in the page body has a valid primary language subtag.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a valid `lang` attribute.',
        F1: 'The test target has an invalid `lang` attribute.'
      }
    },
    'QW-ACT-R23': {
      name: 'video element visual content has accessible alternative',
      description:
        'This rule checks that video elements with audio have an alternative for the video content as audio or as text.',
      results: {
        I1: 'No test targets found.',
        P1: 'The rule passed because of the rule ',
        W1: "The rule can't tell because of the rule ",
        F1: 'The rule failed because of the rule '
      }
    },
    'QW-ACT-R24': {
      name: 'autocomplete attribute has valid value',
      description: 'This rule checks that the HTML autocomplete attribute has a correct value.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a valid `autocomplete` attribute.',
        F1: 'The test target `autocomplete` attribute is not valid.'
      }
    },
    'QW-ACT-R25': {
      name: 'ARIA state or property is permitted',
      description:
        'This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.',
      results: {
        I1: 'No test targets found.',
        P1: 'The `{attr}` property is supported or inherited by the `role` {role}.',
        F1: 'The `{attr}` property is neither inherited nor supported by the `role` {role}.'
      }
    },
    'QW-ACT-R26': {
      name: 'video element auditory content has accessible alternative',
      description: 'This rule checks that video elements have an alternative for information conveyed through audio.',
      results: {
        I1: 'No test targets found.',
        P1: 'The rule passed because of the rule ',
        W1: "The rule can't tell because of the rule ",
        F1: 'The rule failed because of the rule '
      }
    },
    'QW-ACT-R27': {
      name: 'aria-* attribute is defined in WAI-ARIA',
      description: 'This rule checks that each aria-* attribute specified is defined in ARIA 1.1.',
      results: {
        I1: 'No test targets found.',
        P1: 'All aria-* attributes in this element are defined in ARIA 1.1.',
        F1: 'One or more aria-* attributes are not defined in ARIA 1.1.'
      }
    },
    'QW-ACT-R28': {
      name: 'Element with role attribute has required states and properties',
      description:
        'This rule checks that elements that have an explicit role also specify all required states and properties.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target required attributes are listed.',
        P2: "The test target `role` doesn't have required state or property",
        F1: 'The test target has unlisted required states or properties.'
      }
    },
    'QW-ACT-R29': {
      name: 'Audio element content has text alternative',
      description: 'This rule checks if audio only elements have a text alternative available.',
      results: {
        I1: 'No test targets found.',
        P1: 'The rule passed because of the rule ',
        W1: "The rule can't tell because of the rule ",
        F1: 'The rule failed because of the rule '
      }
    },
    'QW-ACT-R30': {
      name: 'Visible label is part of accessible name',
      description:
        'This rule checks that interactive elements labeled through their content have their visible label as part of their accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The complete visible text content of the test target either matches or is contained within its accessible name.',
        F1: "The test target doesn't have an accessible name.",
        F2: 'The complete visible text content of the test target neither matches or is contained within its accessible name.'
      }
    },
    'QW-ACT-R31': {
      name: 'Video element visual-only content has accessible alternative',
      description: 'This rule checks that video elements without audio have an alternative available.',
      results: {
        I1: 'No test targets found.',
        P1: 'The rule passed because of the rule ',
        W1: "The rule can't tell because of the rule ",
        F1: 'The rule failed because of the rule '
      }
    },
    'QW-ACT-R32': {
      name: 'video element visual content has strict accessible alternative',
      description: 'This rule checks that video elements with audio have audio description.',
      results: {
        I1: 'No test targets found.',
        P1: 'The rule passed because of the rule ',
        W1: "The rule can't tell because of the rule ",
        F1: 'The rule failed because of the rule '
      }
    },
    'QW-ACT-R33': {
      name: 'ARIA required context role',
      description:
        'This rule checks that an element with an explicit semantic role exists inside its required context.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target parent has the required context `role`.',
        F1: "The test target parent doesn't have the required context `role`."
      }
    },
    'QW-ACT-R34': {
      name: 'ARIA state or property has valid value',
      description: 'This rule checks that each ARIA state or property has a valid value.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target `{attr}` attribute has a valid value.',
        F1: 'The test target `{attr}` attribute has an invalid value.'
      }
    },
    'QW-ACT-R35': {
      name: 'Heading has accessible name',
      description:
        'This rule applies to any HTML element with the semantic role of heading that is included in the accessibility tree.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a non-empty accessible name.',
        F1: "The test target accessible name doesn't exist or it's empty ('')."
      }
    },
    'QW-ACT-R36': {
      name: 'Headers attribute specified on a cell refers to cells in the same table element',
      description:
        'This rule checks that the headers attribute on a cell refer to other cells in the same table element with a semantic role of columnheader or rowheader.',
      results: {
        I1: 'No test targets found.',
        P1: 'All headers attributes refer to a cell with a semantic role of columnheader of rowheader within the same table.',
        F1: 'The headers attribute `{attr}` refers to an ID that does not exist within the same table.',
        F2: 'The headers attribute `{attr}` refers to an element inside the same table which does not have a role of rowheader or columnheader.'
      }
    },
    'QW-ACT-R37': {
      name: 'Text has minimum contrast',
      description:
        'This rule checks that the highest possible contrast of every text character with its background meets the minimal contrast requirement.',
      results: {
        I1: 'No test targets found.',
        P1: 'Element has contrast ratio higher than minimum.',
        P2: "Element doesn't have human language text.",
        P3: 'Element has gradient with contrast ratio higher than minimum.',
        W1: 'Element has text-shadow that needs manual verification.',
        W2: 'Element has an image on background.',
        W3: "Element has an gradient that we can't verify.",
        F1: 'Element has contrast ratio lower than minimum.',
        F2: 'Element has gradient with contrast ratio lower than minimum.'
      }
    },
    'QW-ACT-R38': {
      name: 'ARIA required owned elements',
      description:
        'This rule checks that an element with an explicit semantic role has at least one of its required owned elements.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target only owns elements with correct role.',
        F1: "The test target owns elements that doesn't have the correct role."
      }
    },
    'QW-ACT-R39': {
      name: 'All table header cells have assigned data cells',
      description: 'This rule checks that each table header has assigned data cells in a table element.',
      results: {
        I1: 'No test targets found.',
        P1: 'The column header element has at least one assigned cell.',
        F1: 'The column header element does not have at least one assigned cell.'
      }
    },
    'QW-ACT-R40': {
      name: 'Zoomed text node is not clipped with CSS overflow',
      description:
        'This rule checks that text nodes are not unintentionally clipped by overflow, when a page is zoomed to 200% on 1280 by 1024 viewport.',
      results: {
        I1: 'No test targets found.',
        W1: 'Check if each ancestor or the text node is not clipped by overflow.'
      }
    },
    'QW-ACT-R41': {
      name: 'Error message describes invalid form field value',
      description:
        'This rule checks that text error messages provided when the user completes a form field with invalid values or using an invalid format, identify the cause of the error or how to fix the error.',
      results: {
        I1: 'No test targets found.',
        W1: 'Check that text error messages provided, identify the cause of the error or how to fix the error.'
      }
    },
    'QW-ACT-R42': {
      name: 'Object element has non-empty accessible name',
      description: 'This rule checks that each `object` element has a non-empty accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a non-empty accessible name.',
        F1: "The test target accessible name doesn't exist or it's empty ('')."
      }
    },
    'QW-ACT-R43': {
      name: 'Scrollable element is keyboard accessible',
      description: 'This rule checks that scrollable elements can be scrolled by keyboard',
      results: {
        I1: 'No test targets found.',
        P1: 'This scrollable section element is included in sequential focus navigation.',
        F1: 'This vertically/horizontally scrollable section element is not included in sequential focus navigation, nor does it have any descendants that are.'
      }
    },
    'QW-ACT-R44': {
      name: 'Links with identical accessible names and context serve equivalent purpose',
      description:
        'This rule checks that links with identical accessible names and context resolve to the same or equivalent resources.',
      results: {
        I1: 'No test targets found.',
        P1: 'The `links` with the same accessible name have equal content.',
        W1: 'The `links` with the same accessible name have different content. Verify is the content is equivalent.'
      }
    },
    'QW-ACT-R48': {
      name: 'Element marked as decorative is not exposed',
      description:
        'This rule checks that elements marked as decorative either are not included in the accessibility tree, or have a presentational role.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target is not in the accessibility tree.',
        F1: 'The test target is in the accessibility tree.'
      }
    },
    'QW-ACT-R49': {
      name: 'Audio or video that plays automatically has no audio that lasts more than 3 seconds',
      description: 'audio or video that plays automatically does not output audio for more than 3 seconds.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target plays for 3 seconds or less.',
        W1: "Can't collect data from the test target element.",
        W2: 'Check if test target has a visible control mechanism.'
      }
    },
    'QW-ACT-R50': {
      name: 'audio or video that plays automatically has a control mechanism',
      description: 'audio or video that plays automatically must have a control mechanism.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a visible control mechanism.',
        W1: "Can't collect data from the test target element.",
        W2: 'Check if test target has a visible control mechanism.'
      }
    },
    'QW-ACT-R51': {
      name: 'video element visual-only content is media alternative for text',
      description: 'This rule checks non-streaming silent video is a media alternative for text on the page.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: 'Check that the content in the video matches the information in the text.'
      }
    },
    'QW-ACT-R52': {
      name: 'video element visual-only content has description track',
      description:
        'This rule checks that description tracks that come with non-streaming video elements, without audio, are descriptive.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: 'Check if visual content has an accessible alternative.'
      }
    },
    'QW-ACT-R53': {
      name: 'video element visual-only content has transcript',
      description:
        'Non-streaming video elements without audio must have all visual information available in a transcript.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: 'Check if visual content has an accessible alternative.'
      }
    },
    'QW-ACT-R54': {
      name: 'video element visual-only content has audio track alternative',
      description: 'Non-streaming video elements without audio must have an audio alternative.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: 'Check if visual content has an accessible alternative.'
      }
    },
    'QW-ACT-R55': {
      name: 'video element visual content has audio description',
      description:
        'This rule checks that non-streaming video elements have all visual information also contained in the audio.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: "The test target has a sound track but we can't verify the volume. Check if the test target has audio and if it does check if visual content has an accessible alternative."
      }
    },
    'QW-ACT-R56': {
      name: 'video element content is media alternative for text',
      description: 'This rule checks non-streaming video is a media alternative for text on the page.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: 'Check that the content in the video matches the information in the text.'
      }
    },
    'QW-ACT-R57': {
      name: 'video element visual content has description track',
      description:
        'This rule checks that description tracks that come with non-streaming video elements are descriptive.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: "The test target has a sound track but we can't verify the volume. Check if the test target has audio and if it does check if visual content has an accessible alternative."
      }
    },
    'QW-ACT-R58': {
      name: 'audio element content has transcript',
      description: 'Non-streaming audio elements must have a text alternative for all included auditory information.',
      results: {
        I1: 'No test targets found.',
        W1: 'Check if the test target audio has text-alternative.'
      }
    },
    'QW-ACT-R59': {
      name: 'audio element content is media alternative for text',
      description: 'This rule checks audio is a media alternative for text on the page.',
      results: {
        I1: 'No test targets found.',
        W1: 'Check that the content in the audio matches the information in the text.'
      }
    },
    'QW-ACT-R60': {
      name: 'video element auditory content has captions',
      description:
        'This rule checks that captions are available for audio information in non-streaming video elements.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: "The test target has a sound track but we can't verify the volume. Check if the test target has audio and if it does check if audio content has matching captions."
      }
    },
    'QW-ACT-R61': {
      name: 'Audio and visuals of video element have transcript',
      description:
        'This rule checks that non-streaming video elements have all audio and visual information available in a transcript.',
      results: {
        I1: 'No test targets found.',
        W1: "Can't collect data from the test target.",
        W2: "The test target has a sound track but we can't verify the volume. Check if the test target has audio and a transcript. If it does check if the transcript contains all the visual and audio information of the video."
      }
    },
    'QW-ACT-R62': {
      name: 'Element in sequential focus order has visible focus',
      description: 'This rule checks that each element in sequential focus order has some visible focus indication.',
      results: {
        I1: 'No test targets found.',
        W1: 'Check if the element has some visible focus indication'
      }
    },
    'QW-ACT-R63': {
      name: 'Document has a landmark with non-repeated content',
      description:
        'This rule checks that each page has an element with a landmark semantic role starting with non-repeated content',
      results: {
        I1: 'No test targets found.',
        P1: "The page doesn't have repeated content.",
        W1: 'Check either there is no non-repeated content after repeated content or there exists an element for which all the following are true: - the element has semantic role inheriting from landmark; and - the first perceivable content (in tree order in the flat tree) which is an inclusive descendant of the element is non-repeated content after repeated content; and - the element is included in the accessibility tree.'
      }
    },
    'QW-ACT-R64': {
      name: 'Document has heading for non-repeated content',
      description: 'This rule checks that the non-repeated content contains a heading',
      results: {
        I1: 'No test targets found.',
        P1: "The page doesn't have repeated content.",
        W1: 'Check either there is no non-repeated content after repeated content or there exists an element for which all the following are true: - the element is non-repeated content after repeated content; and - the element has a semantic role of heading; and - the element is visible; and - the element is included in the accessibility tree.'
      }
    },
    'QW-ACT-R65': {
      name: 'Element with presentational children has no focusable content',
      description:
        'This rule checks that elements with a role that makes its children presentational do not contain focusable elements.',
      results: {
        I1: 'No test targets found.',
        P1: "The element doesn't have descendants in the flat tree that are part of sequential focus navigation.",
        F1: 'The element has descendants in the flat tree that are part of sequential focus navigation.'
      }
    },
    'QW-ACT-R66': {
      name: 'Menuitem has non-empty accessible name',
      description: 'This rule checks that each element with a menuitem role has a non-empty accessible name.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a non-empty accessible name.',
        F1: "The test target accessible name doesn't exist or it's empty ('')."
      }
    },
    'QW-ACT-R67': {
      name: 'Letter spacing in style attributes is not !important',
      description:
        "This rule checks that the style attribute is not used to prevent adjusting letter-spacing by using !important, except if it's at least 0.12 times the font size.",
      results: {
        I1: 'No test targets found.',
        P1: 'The letter-spacing property is not !important.',
        P2: 'The letter-spacing is at least 0.12 times the font-size.',
        P3: 'The cascaded letter-spacing is not the declared value.',
        F1: 'CSS styles prevent the letter-spacing to be above the minimum value.'
      }
    },
    'QW-ACT-R68': {
      name: 'Line height in style attributes is not !important',
      description:
        "This rule checks that the style attribute is not used to prevent adjusting line-height by using !important, except if it's at least 1.5 times the font size.",
      results: {
        I1: 'No test targets found.',
        P1: 'The line-height property is not !important.',
        P2: 'The line-height is at least 1.5 times the font-size.',
        P3: 'The cascaded line-height is not the declared value.',
        F1: 'CSS styles prevent the line-height to be above the minimum value.'
      }
    },
    'QW-ACT-R69': {
      name: 'Word spacing in style attributes is not !important',
      description:
        "This rule checks that the style attribute is not used to prevent adjusting word-spacing by using !important, except if it's at least 0.16 times the font size.",
      results: {
        I1: 'No test targets found.',
        P1: 'The word-spacing property is not !important.',
        P2: 'The word-spacing is at least 0.16 times the font-size.',
        P3: 'The cascaded word-spacing is not the declared value.',
        F1: 'CSS styles prevent the word-spacing to be above the minimum value.'
      }
    },
    'QW-ACT-R70': {
      name: 'iframe with negative tabindex has no interactive elements',
      description:
        'This rule checks that `iframe` elements with a negative `tabindex` attribute value contain no interactive elements.',
      results: {
        I1: 'No test targets found.',
        P1: 'The nested browsing context does not include elements that are visible and part of the sequential focus navigation.',
        F1: 'The nested browsing context includes elements that are visible and part of the sequential focus navigation.'
      }
    },
    'QW-ACT-R71': {
      name: '`meta` element has no refresh delay (no exception)',
      description: 'This rule checks that the `meta` element is not used for delayed redirecting or refreshing.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target refreshes/redirects immediately.',
        F1: 'The test target refreshes after {seconds} seconds.',
        F2: 'The test target redirects after {seconds} seconds.'
      }
    },
    'QW-ACT-R72': {
      name: 'First focusable element is link to non-repeated content',
      description: 'This rule checks that the first focusable element is a link to non-repeated content in the page',
      results: {
        I1: 'No test targets found.',
        W1: 'Check that the first focusable element has an accessible name that communicates that it skips content',
        W2: 'Check that the first focusable element skips to the main content and its accessible name communicates so.',
        F1: 'The first focusable element is not keyboard actionable.',
        F2: 'The first focusable element is not in the accessibility tree.',
        F3: 'The first focusable element does not have the role of link.',
        F4: 'The first focusable element does not skip to the main content.',
        F5: 'The page does not have focusable elements.'
      }
    },
    'QW-ACT-R73': {
      name: 'Block of repeated content is collapsible',
      description: 'This rule checks that repeated blocks of content are collapsible.',
      results: {
        I1: 'No test targets found.',
        P1: "The page doesn't have repeated content.",
        W1: 'For each block of repeated content in each test target, which is before (in the flat tree) at least one node of non-repeated content after repeated content, check that all the following are true: - there exists an instrument to make all nodes in this block not visible; and - there exists an instrument to remove all nodes in this block from the accessibility tree.'
      }
    },
    'QW-ACT-R74': {
      name: 'Document has an instrument to move focus to non-repeated content',
      description: 'This rule checks that there is an instrument to move focus to non-repeated content in the page.',
      results: {
        I1: 'No test targets found.',
        P1: "The page doesn't have repeated content.",
        W1: 'The page has one or more instrument(s) to move focus. Check if any of these instrument(s) is being used before a block of repeated content, and the focus is moved to just before a block of non-repeated content.',
        W2: 'Check if the page has any instrument(s) to move focus. Check if any of these instrument(s) is being used before a block of repeated content, and the focus is moved to just before a block of non-repeated content.'
      }
    },
    'QW-ACT-R75': {
      name: 'Bypass Blocks of Repeated Content',
      description: 'This rule checks that each page has a mechanism to bypass repeated blocks of content.',
      results: {
        I1: 'No test targets found.',
        P1: 'The rule passed because of the rule ',
        W1: "The rule can't tell because of the rule ",
        F1: 'The rule failed because of the rule '
      }
    },
    'QW-ACT-R76': {
      name: 'Text has enhanced contrast',
      description:
        'This rule checks that the highest possible contrast of every text character with its background meets the enhanced contrast requirement.',
      results: {
        I1: 'No test targets found.',
        P1: 'Element has contrast ratio higher than minimum.',
        P2: "Element doesn't have human language text.",
        P3: 'Element has gradient with contrast ratio higher than minimum.',
        W1: 'Element has text-shadow that needs manual verification.',
        W2: 'Element has an image on background.',
        W3: "Element has an gradient that we can't verify.",
        F1: 'Element has contrast ratio lower than minimum.',
        F2: 'Element has gradient with contrast ratio lower than minimum.'
      }
    },
    'QW-ACT-R77': {
      name: 'ARIA required ID references exist',
      description: 'This rule checks that every ID reference required by WAI-ARIA exists.',
      results: {
        I1: 'No test targets found.',
        P1: 'Referenced element exists.',
        F1: 'Referenced element does not exist.'
      }
    }
  },
  'wcag-techniques': {
    'QW-WCAG-T1': {
      name: 'Providing text alternatives for the area elements of image maps',
      description: 'This technique checks the text alternative of area elements of images maps',
      results: {
        I1: 'No test targets found.',
        W1: 'Please verify that the `alt` attribute describes correctly the corresponding area of the image.',
        F1: "The `alt` attribute doesn't exist or is empty ('')."
      }
    },
    'QW-WCAG-T2': {
      name: 'Using caption elements to associate data table captions with data tables',
      description: 'This technique checks the caption element is correctly use on tables',
      results: {
        I1: 'No test targets found.',
        W1: 'Please verify that the `caption` element identifies the table correctly.',
        F1: "The `caption` element doesn't exist or is empty ('')."
      }
    },
    'QW-WCAG-T3': {
      name: 'Providing a description for groups of form controls using `fieldset` and `legend` elements',
      description: 'This technique checks the correct use of the description element for form controls',
      results: {
        I1: 'No test targets found.',
        W1: 'Please verify that the `legend` description is valid.',
        F1: 'The `fieldset` element is neither inside nor referencing a `form` element.',
        F2: "The `legend` element doesn't exist or is empty ('')."
      }
    },
    'QW-WCAG-T4': {
      name: 'Using the summary attribute of the table element to give an overview of data tables',
      description: 'This technique checks the correct use of the summary attribute for table elements',
      results: {
        I1: 'No test targets found.',
        W1: 'Please verify that the summary is a valid description of the table.',
        F1: 'The summary is empty.',
        F2: 'The caption is a duplicate of the summary.'
      }
    },
    'QW-WCAG-T5': {
      name: 'Using alt attributes on images used as submit buttons',
      description: 'This technique checks all input elements that are buttons use alt text',
      results: {
        I1: 'No test targets found.',
        W1: 'Please verify that the value of the alt attribute correctly describes the function of the button.',
        F1: 'The input element does not have an alt attribute.',
        F2: 'The input element has an empty alt attribute.'
      }
    },
    'QW-WCAG-T6': {
      name: 'Using both keyboard and other device-specific functions',
      description:
        'The objective of this technique is to verify the parity of keyboard-specific and mouse-specific events when code that has a scripting function associated with an event is used',
      results: {
        I1: 'No test targets found.',
        P1: 'The mouse event attribute has a keyboard equivalent.',
        W1: "The test target has a keyboard event, but we can't verify if it's equivalent to the mouse event."
      }
    },
    'QW-WCAG-T7': {
      name: 'Providing definitions for abbreviations by using the abbr element',
      description:
        'The objective of this technique is to provide expansions or definitions for abbreviations by using the abbr element',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has the definition in the title attribute.',
        F1: "The test target doesn't have the definition in the title attribute."
      }
    },
    'QW-WCAG-T8': {
      name: 'Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives',
      description:
        'This describes a failure condition for all techniques involving text alternatives. If the text in the "text alternative" cannot be used in place of the non-text content without losing information or function then it fails because it is not, in fact, an alternative to the non-text content',
      results: {
        I1: 'No test targets found.',
        W1: 'Text alternative needs manual verification.',
        F1: 'Text alternative is not actually a text alternative for the non-text content.'
      }
    },
    'QW-WCAG-T9': {
      name: 'Organizing a page using headings',
      description:
        'The objective of this technique is to ensure that sections have headings that identify them and that the heading are used in the correct order',
      results: {
        I1: 'No test targets found.',
        W1: 'Please verify that headers are used to divide the page correctly.',
        F1: 'Headings are not in the correct order.',
        F2: 'Heading number is missing.',
        F3: "Headings don't start with h1"
      }
    },
    'QW-WCAG-T10': {
      name: 'Combining adjacent image and text links for the same resource',
      description:
        'The objective of this technique is to provide both text and iconic representations of links without making the web page more confusing or difficult for keyboard users or assistive technology users. Since different users finding text and icons more usable, providing both can improve the accessibility of the link.',
      results: {
        I1: 'No test targets found.',
        P1: 'The a element contains an image that has an empty alt attribute.',
        W1: 'The link contains an image that has an alt attribute that should be manually verified.',
        F1: "The link text is equal to the image's alternative text."
      }
    },
    'QW-WCAG-T11': {
      name: 'Providing text alternatives on applet elements',
      description:
        'Provide a text alternative for an applet by using the alt attribute to label an applet and providing the text alternative in the body of the applet element. In this technique, both mechanisms are required due to the varying support of the alt attribute and applet body text by user agents.',
      results: {
        I1: 'No test targets found.',
        W1: 'Please verify that the values of the alt attribute and the body text correctly describe the applet element.',
        F1: 'The applet element does not contain an alt attribute.',
        F2: 'The applet element has an empty alt attribute.',
        F3: 'The applet element does not contain alternative text in its body.'
      }
    },
    'QW-WCAG-T12': {
      name: 'Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables',
      description:
        'The objective of this technique is to describe a failure that occurs when a table used only for layout includes either th elements, a summary attribute, or a caption element. This is a failure because it uses structural (or semantic) markup only for presentation. The intent of the HTML and XHTML table elements is to present data.',
      results: {
        I1: 'No test targets found.',
        W4: 'No incorrect elements used in layout table.',
        W1: "The table has a non-empty summary - Amend it if it's a layout table.",
        W2: "The table has a th element - Amend it if it's a layout table.",
        W3: "The table has a caption element - Amend it if it's a layout table."
      }
    },
    'QW-WCAG-T13': {
      name: 'Failure of Success Criterion 2.2.2 due to using the blink element',
      description:
        'The blink element, while not part of the official HTML or XHTML specification, is supported by many user agents. It causes any text inside the element to blink at a predetermined rate. This cannot be interrupted by the user, nor can it be disabled as a preference. The blinking continues as long as the page is displayed. Therefore, content that uses blink fails the Success Criterion because blinking can continue for more than three seconds.',
      results: {
        I1: 'No test targets found.',
        P1: 'Blink is not used.',
        F1: 'Used blink element.'
      }
    },
    'QW-WCAG-T14': {
      name: 'Using id and headers attributes to associate data cells with header cells in data tables',
      description: 'This technique checks if data cells are associated with header cells in data tables.',
      results: {
        I1: 'No test targets found.',
        I2: 'This table is a layout table.',
        I3: 'No header attributes are used in this data table.',
        P1: 'id and headers attributes are correctly used.',
        F1: 'This table is a layout table with id or headers attributes.',
        F2: 'There are duplicate `id`s in this data table.',
        F3: 'id and headers attributes are not correctly used.'
      }
    },
    'QW-WCAG-T15': {
      name: 'Using the link element and navigation tools',
      description:
        'The objective of this technique is to describe how the link element can provide metadata about the position of an HTML page within a set of Web pages or can assist in locating content with a set of Web pages.',
      results: {
        I1: 'No test targets found.',
        I2: "The element doesn't contain a rel attribute or doesn't pertains navigation.",
        P1: 'The link has rel and href attributes and pertains navigation.',
        F1: "The element doesn't contain an href attribute and pertains navigation."
      }
    },
    'QW-WCAG-T16': {
      name: 'Using HTML according to spec',
      description: 'This technique checks that the HTML or XHTML web page follows the specification.',
      results: {
        I1: 'No test targets found.',
        P1: "The HTML document doesn't have errors.",
        W1: 'The HTML document has warnings.',
        F1: 'The HTML document has errors.'
      }
    },
    'QW-WCAG-T17': {
      name: 'Positioning labels to maximize predictability of relationships',
      description: 'This technique checks the correct position of labels in forms',
      results: {
        I1: 'No test targets found.',
        P1: 'The form field has well positioned label.',
        F1: 'The form field has incorrect positioned label.',
        F2: 'The form field label is empty.',
        F3: 'The form field label is not visible.'
      }
    },
    'QW-WCAG-T18': {
      name: 'Using table markup to present tabular information',
      description:
        'The objective of this technique is to present tabular information in a way that preserves relationships within the information even when users cannot see the table or the presentation format is changed. Using the table element with the child elements tr, th, and td makes these relationships perceivable.',
      results: {
        I1: 'No test targets found.',
        P1: 'There is at least one occurrence of table, tr, td and th.',
        F1: 'There are missing table child elements.'
      }
    },
    'QW-WCAG-T19': {
      name: 'Providing submit buttons',
      description:
        'The objective of this technique is to provide a mechanism that allows users to explicitly request changes of context. The intended use of a submit button is to generate an HTTP request that submits data entered in a form, so it is an appropriate control to use for causing a change of context.',
      results: {
        I1: 'No test targets found.',
        P1: "The form contains one of the following elements input[type~='submit image'], button[type='submit'].",
        F1: "Form tag doesn't contain any of the following elements input[type~='submit image'], button[type='submit']."
      }
    },
    'QW-WCAG-T20': {
      name: 'Supplementing link text with the title attribute',
      description: 'Supplementing link text with the title attribute',
      results: {
        I1: 'No test targets found.',
        W1: "Please verify that the element's title attribute describes correctly the link.",
        F1: "The element's title attribute is empty.",
        F2: 'The element contains a title attribute equal to the text in the link'
      }
    },
    'QW-WCAG-T21': {
      name: 'Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link',
      description: 'This technique checks the text alternative of images which are the only content of a link',
      results: {
        I1: 'No test targets found.',
        P1: 'The link has an accessible name.',
        F1: "The image doesn't have an accessible name."
      }
    },
    'QW-WCAG-T22': {
      name: 'Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded',
      description:
        'The objective of this technique is to ensure that pages do not disorient users by opening up one or more new windows that automatically attain focus as soon as a page is loaded.',
      results: {
        I1: 'No test targets found.',
        P1: "Browser didn't open new tab.",
        F1: 'Browser opened a new tab.'
      }
    },
    'QW-WCAG-T23': {
      name: 'Adding a link at the top of each page that goes directly to the main content area',
      description:
        'The objective of this technique is to provide a mechanism to bypass blocks of material that are repeated on multiple Web pages by skipping directly to the main content of the Web page.',
      results: {
        I1: 'No test targets found.',
        W1: 'The first focusable control is a visible link to a <main> element.',
        W2: 'The first focusable control is a visible link to some content in the Web Page. Verify if it links to the main content.',
        F1: 'The first focusable control on the Web page links to an inexistent element.',
        F2: 'The first focusable control on the Web page links to the top of the page.',
        F3: 'The first focusable control on the Web page does not links to local content.',
        F4: 'The first focusable control on the Web page is not a link.',
        F5: 'This Web page does not have focusable controls.'
      }
    },
    'QW-WCAG-T24': {
      name: 'Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received',
      description:
        'Content that normally receives focus when the content is accessed by keyboard may have this focus removed by scripting.',
      results: {
        I1: 'No test targets found.',
        P1: 'Element kept focus.',
        F1: "Element didn't keep focus."
      }
    },
    'QW-WCAG-T25': {
      name: 'Using the scope attribute to associate header cells and data cells in data tables',
      description:
        'The objective of this technique is to associate header cells with data cells in complex tables using the scope attribute.',
      results: {
        I1: 'No test targets found.',
        P1: "The element's scope attribute matches the following values: col, row, colgroup, rowgroup.",
        F1: "The element doesn't contain a scope attribute.",
        F2: "The element's scope attribute is empty.",
        F3: "The element's scope attribute doesn't match any of the following values: col, row, colgroup, rowgroup."
      }
    },
    'QW-WCAG-T26': {
      name: 'Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control',
      description:
        'This failure demonstrates how using generic HTML elements to create user interface controls can make the controls inaccessible to assistive technology.',
      results: {
        I1: 'No test targets found.',
        P1: 'The element is a user interface control with an event handler.',
        F1: 'The element is a forced user interface control without the proper role attribute.'
      }
    },
    'QW-WCAG-T27': {
      name: 'Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)',
      description:
        "This failure describes situations where blocks of text that are justified (aligned to both the left and the right margins) occurs in HTML, using the 'align' attribute.",
      results: {
        I1: 'No test targets found.',
        P1: 'This content is not justified.',
        F1: "This content shouldn't be justified."
      }
    },
    'QW-WCAG-T28': {
      name: 'Using `percent, em, names` for font sizes',
      description: 'This technique checks that all font-size attribute uses percent, em or names.',
      results: {
        I1: 'No test targets found.',
        P1: 'This test target has a font-size css property using an relative unit value with the important flag.',
        F1: 'This test target has a font-size css property using an absolute unit value with the important flag.'
      }
    },
    'QW-WCAG-T29': {
      name: 'Specifying alignment either to the left or right in CSS',
      description:
        'This technique describes how to align blocks of text either left or right by setting the CSS text-align property.',
      results: {
        I1: 'No test targets found.',
        P1: 'This test target has a text-align css property equal to justify.',
        F1: 'This test target has a text-align css property not equal to justify.'
      }
    },
    'QW-WCAG-T30': {
      name: 'Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds',
      description:
        'CSS defines the blink value for the text-decoration property. When used, it causes any text in elements with this property to blink at a predetermined rate. This cannot be interrupted by the user, nor can it be disabled as a user agent preference. The blinking continues as long as the page is displayed. Therefore, content that uses text-decoration:blink fails the Success Criterion because blinking can continue for more than three seconds.',
      results: {
        I1: 'No test targets found.',
        F1: 'This test target has a `text-decoration` property with the value `blink.'
      }
    },
    'QW-WCAG-T31': {
      name: 'Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa',
      description:
        'Users with vision loss or cognitive, language and learning challenges often prefer specific foreground and background color combinations. In some cases, individuals with low vision will find it much easier to see a Web page that has white text on a black background, and they may have set their user agent to present this contrast. Many user agents make it possible for users to choose a preference about the foreground or background colors they would like to see without overriding all author-specified styles. This makes it possible for users to view pages where colors have not been specified by the author in their preferred color combination.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a author defined color and background css properties.',
        F1: 'The test target has a author defined color css property but not a background css property.',
        F2: 'The test target has a author defined background property but not a color css property.'
      }
    },
    'QW-WCAG-T32': {
      name: 'Using ol, ul and dl for lists or groups of links',
      description:
        'The objective of this technique is to create lists of related items using list elements appropriate for their purposes.',
      results: {
        I1: 'No test targets found.',
        W1: 'Check that content that has the visual appearance of a list (with or without bullets) is marked as an unordered list.',
        W2: 'Check that content that has the visual appearance of a numbered list is marked as an ordered list.',
        W3: 'Check that content is marked as a definition list when terms and their definitions are presented in the form of a list.',
        F1: 'A list item is not contained in a correct list element.'
      }
    },
    'QW-WCAG-T33': {
      name: 'Using description lists - dd,dt',
      description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target is contained in a correct description list element.',
        F1: 'The test target is not contained in a correct description list element.'
      }
    },
    'QW-WCAG-T34': {
      name: 'Using description lists - dl',
      description:
        'Ensures <dl> elements are structured correctly. <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',
      results: {
        I1: 'No test targets found.',
        P1: 'The description list element is structured correctly',
        F1: 'The description list element contains an incorrect element type',
        F2: 'The description list element is not ordered correctly'
      }
    },
    'QW-WCAG-T35': {
      name: '`id` attribute value is unique',
      description: 'This technique checks that all id attribute values on a single page are unique.',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target has a unique `id` attribute.',
        F1: 'Several elements have the same `id` attribute.'
      }
    }
  },
  'best-practices': {
    'QW-BP1': {
      name: 'Using h1-h6 to identify headings',
      description:
        'It is recommended to use HTML and XHTML heading markup to provide semantic code for headings in the content',
      results: {
        I1: 'No test targets found.',
        W1: 'Check that heading markup is used when content is a heading.',
        F1: "This page doesn't use headings."
      }
    },
    'QW-BP2': {
      name: 'Concise images alt text',
      description: 'Image alt text attribute with more than 100 characters',
      results: {
        I1: 'No test targets found.',
        P1: 'The img alt text attribute has less than 100 characters.',
        F1: 'The img alt text attribute has more than 100 characters.'
      }
    },
    'QW-BP4': {
      name: 'Grouped links not within a nav element',
      description: 'Set of 10 or more links not grouped within a list (nav)',
      results: {
        I1: 'No test targets found.',
        F1: 'It was found a group of 10 or more links not grouped within a nav element.'
      }
    },
    'QW-BP5': {
      name: 'Using table elements inside other table elements',
      description: 'It is not recommended to use table elements inside other table elements',
      results: {
        I1: 'No test targets found.',
        P1: 'There are not table elements inside other table elements.',
        F1: 'There are table elements inside other table elements'
      }
    },
    'QW-BP6': {
      name: 'title element is not too long (100 characters)',
      description: "The webpage title element shouldn't have more than 100 characters",
      results: {
        I1: 'No test targets found.',
        P1: 'The page title has less than 100 characters.',
        F1: 'The page title has 100 or more characters.'
      }
    },
    'QW-BP7': {
      name: 'Title element contains ASCII-art',
      description: 'Title element contains ASCII-art',
      results: {
        I1: 'No test targets found.',
        P1: "The title element doesn't contain ASCII art.",
        F1: 'The title element contains ASCII art.'
      }
    },
    'QW-BP8': {
      name: 'Headings with images should have an accessible name',
      description: 'Headings with at least one image should have an accessible name',
      results: {
        I1: 'No test targets found.',
        P1: 'This heading with at least one image has an accessible name.',
        F1: 'This heading with at least one image does not have an accessible name.'
      }
    },
    'QW-BP9': {
      name: 'Table element without header cells has a caption',
      description: 'A table without th elements should have a caption element to describe it.',
      results: {
        I1: 'No test targets found.',
        P1: "Table doesn't have header cells but has a caption.",
        F1: "Table doesn't have header cells or caption."
      }
    },
    'QW-BP10': {
      name: 'HTML elements are used to control visual presentation of content',
      description: 'No HTML elements are used to control the visual presentation of content',
      results: {
        I1: 'No test targets found.',
        P1: "The webpage doesn't use elements to control the visual content presentation.",
        F1: 'The webpage uses the element {name} to control the visual content presentation.'
      }
    },
    'QW-BP11': {
      name: 'Using br to make a list',
      description: 'Using 3 consecutive br elements',
      results: {
        I1: 'No test targets found.',
        P1: 'There are less than 3 consecutive br.',
        F1: '`br` elements are being be used as a list.'
      }
    },
    'QW-BP12': {
      name: 'Using scope col and row',
      description: 'Using scope col in the first row and scope row in the first element of each row',
      results: {
        I1: 'No test targets found.',
        P1: 'The scope attribute is correctly used.',
        F1: 'The scope attribute is incorrectly used.'
      }
    },
    'QW-BP13': {
      name: 'Using consecutive links with the same href and one contains an image',
      description: 'Using consecutive links with the same href in which one of the links contains an image',
      results: {
        I1: 'No test targets found.',
        P1: 'There are no consecutive links with the same href in which one of the links contained an image.',
        F1: 'There are consecutive links with the same href in which one of the links contained an image.'
      }
    },
    'QW-BP15': {
      name: 'At least one width attribute of an HTML element is expressed in absolute values',
      description: 'At least one width attribute of an HTML element is expressed in absolute values',
      results: {
        I1: 'No test targets found.',
        P1: 'The test target `width` attribute uses relative units.',
        F1: 'The test target `width` attribute uses absolute units.'
      }
    },
    'QW-BP17': {
      name: 'Adding a link at the beginning of a block of repeated content to go to the end of the block',
      description:
        'The objective of this technique is to provide a mechanism to bypass a block of material by skipping to the end of the block.',
      results: {
        I1: 'No test targets found.',
        W1: 'This link skips a content block.',
        F1: 'This page does not have links.'
      }
    },
    'QW-BP18': {
      name: 'Using percentage values in CSS for container sizes',
      description:
        'The objective of this technique is to enable users to increase the size of text without having to scroll horizontally to read that text. To use this technique, an author specifies the width of text containers using percent values.',
      results: {
        I1: 'No test targets found.',
        P1: 'This test target has a `width` css property using percentage value with the important flag.',
        F1: 'This test target has a `width` css property using `px` value with the important flag.',
        F2: 'This test target has a `width` css property not using percentage value with the important flag.'
      }
    },
    'QW-BP19': {
      name: 'Landmark banner is top level',
      description: 'Ensures the banner landmark is at top level',
      results: {
        I1: 'No test targets found.',
        P1: 'The banner landmark is at top level.',
        F1: 'The banner landmark is not at top level.'
      }
    },
    'QW-BP20': {
      name: 'Landmark no duplicate banner',
      description: 'Ensures the document has at most one banner landmark',
      results: {
        I1: 'No test targets found.',
        P1: 'There is one banner landmark',
        F1: 'There are multiple banner landmarks'
      }
    },
    'QW-BP21': {
      name: 'Landmark no duplicate contentinfo',
      description: 'Ensures the document has at most one contentinfo landmark',
      results: {
        I1: 'No test targets found.',
        P1: 'There is one contentinfo landmark',
        F1: 'There are multiple banner landmarks'
      }
    },
    'QW-BP22': {
      name: 'Landmark has one main',
      description: 'Ensures the document has a main landmark',
      results: {
        I1: 'No test targets found.',
        P1: 'There is one main landmark.',
        F1: 'There are multiple main landmarks.'
      }
    },
    'QW-BP23': {
      name: 'Listitems are used semantically',
      description: 'Ensures <li> elements are used semantically',
      results: {
        I1: 'No test targets found.',
        P1: 'Listitem is used semantically',
        F1: 'Listitem is not used semantically not used semantically'
      }
    },
    'QW-BP24': {
      name: 'Lists are used correctly',
      description:
        'Ensures that lists are structured correctly. <ul> and <ol> must only directly contain <li>, <script> or <template> elements',
      results: {
        I1: 'No test targets found.',
        P1: 'List is used correctly',
        F1: 'List is not used correctly'
      }
    },
    'QW-BP25': {
      name: 'Landmark complementary is top level',
      description: 'Ensures the complementary landmark or aside is at top level',
      results: {
        I1: 'No test targets found.',
        P1: 'The complementary landmark is at top level.',
        F1: 'The complementary landmark is not at top level.'
      }
    },
    'QW-BP26': {
      name: 'Landmark complementary is top level',
      description: 'Ensures the contentinfo landmark is at top level',
      results: {
        I1: 'No test targets found.',
        P1: 'The complementary landmark is at top level.',
        F1: 'The complementary landmark is not at top level.'
      }
    },
    'QW-BP27': {
      name: 'Landmark main is top level',
      description: 'Ensures the main landmark is at top level',
      results: {
        I1: 'No test targets found.',
        P1: 'The main landmark is at top level.',
        F1: 'The main landmark is not at top level.'
      }
    },
    'QW-BP28': {
      name: 'H1 element is used and unique',
      description: 'Ensures there is only one H1',
      results: {
        P1: 'The H1 element is used and unique',
        F1: 'The H1 element is not present or used more than one time'
      }
    },
    'QW-BP29': {
      name: 'HTML lang and xml:lang match',
      description:
        'The best practice checks that for the html element, there is no mismatch between the primary language in non-empty lang and xml:lang attributes, if both are used.',
      results: {
        I1: 'No test targets found.',
        P1: 'The `lang` and `xml:lang` attributes have the same value.',
        F1: "The `lang` and `xml:lang` attributes don't have the same value."
      }
    }
  }
};
