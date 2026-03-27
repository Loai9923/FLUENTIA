import { Locale } from './locale.type';

export const arabicLocal: Locale = {
  lang: 'ar',
  data: {
    pages: {
      external: {
        login: {
          stepOne: {
            login: 'تسجيل الدخول',
            loginText: 'يرجى تسجيل الدخول للوصول إلى حسابك واستكشاف منصتنا',
            form: {
              email: 'البريد الإلكتروني',
              username: 'اسم المستخدم',
              password: 'كلمة المرور',
              rememberMe: 'تذكرني',
              forgotPassword: 'نسيت كلمة المرور؟',
              forgotPasswordSuccess:
                'تم إرسال بريد إلكتروني إلى عنوان بريدك الإلكتروني بنجاح.',
              forgotPasswordFailed: 'حدث خطأ أثناء إرسال البريد الإلكتروني.',
              login: 'تسجيل الدخول',
              validations: {
                invalidEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح.',
              },
            },
            messages: {
              success: 'تم إرسال رمز التحقق إلى بريدك الإلكتروني.',
              failed: 'حدث خطأ أثناء التحقق من حسابك.',
              timeout:
                'انتهت مهلة طلب تسجيل الدخول، يرجى المحاولة مرة أخرى لاحقًا.',
            },
          },
          stepTwo: {
            resendOtp: 'إعادة إرسال رمز التحقق',
            messages: {
              success: 'تم تسجيل الدخول بنجاح.',
              failed: 'حدث خطأ أثناء التحقق من حسابك.',
              timeout:
                'انتهت مهلة طلب تحقق رمز التحقق، يرجى المحاولة مرة أخرى لاحقًا.',
            },
          },
        },
        validations: {
          uppercaseError: 'على الأقل حرف إنجليزي كبير واحد.',
          lowercaseError: 'على الأقل حرف إنجليزي صغير واحد.',
          digitsError: 'على الأقل رقم واحد.',
          specialCharacterError: 'على الأقل حرف خاص واحد.',
          minimumLengthError: 'الحد الأدنى ثمانية أحرف.',
          invalidEquality:
            'تأكيد كلمة المرور غير صحيحة. يرجى التأكد من أن تطابق كلمة المرور التي أدخلتها.',
        },
      },
      home: {
        title: 'الرئيسية',
        headerDescription: 'مرحبًا بك في الصفحة الرئيسية للتطبيق.',
        description: 'هذه هي الصفحة الرئيسية حيث يمكنك العثور على ميزات متنوعة.',
      },
      profile: {
        title: 'الملف الشخصي',
      },
      dashboard: {
        title: 'لوحة المعلومات',
        headerDescription: 'معلومات مفصلة وإرشادات لتحسين أدائك في الخطابة',
        description: 'هنا يمكنك الاطلاع على المعلومات والإحصائيات المهمة.',
        profile: {
          viewProfile: 'الملف الشخصي',
        },
        mosque: {
          title: 'معلومات المسجد/الجامع',
          capacity: '{{capacity}} مصلي',
        },
      },
      previousSermons: {
        title: 'خطبي السابقة',
        headerDescription: 'استعرض خطبك السابقة',
        description: 'هذه الصفحة تحتوي على خطبك السابقة المحفوظة.',
      },
      savedSermons: {
        title: 'الخطب المحفوظة',
        headerDescription: 'خطبك المحفوظة والمخزنة',
        description: 'اطلع على جميع خطبك المحفوظة والمخزنة في المنصة.',
      },
      settings: {
        title: 'الإعدادات والتفضيلات',
        headerDescription: 'إدارة إعداداتك الشخصية',
        description: 'يمكنك تخصيص إعداداتك وتفضيلاتك من هذه الصفحة.',
      },
      help: {
        title: 'المساعدة',
        headerDescription: 'مركز المساعدة والدعم',
        description: 'احصل على المساعدة والدعم الفني من هنا.',
      },
      layout: {
        header: {
          notifications: 'الإشعارات',
          about: 'حول التطبيق',
          language: {
            en: 'English',
            ar: 'عربي',
          },
          userControlPanel: {
            userProfile: 'ملفي الشخصي',
            logout: 'تسجيل الخروج',
          },
        },
        sidenav: {
          preachingCard: {
            title: 'بطاقتي الدعوية',
            mosques: 'مساجد',
            sermons: 'خطبة سابقة',
            listeners: 'مستمع أسبوعياً',
          },
        },
      },
      notFound: {
        title: 'الصفحة غير موجودة',
        description: 'عذراً، الصفحة التي تبحث عنها غير موجودة.',
        goToHome: 'الرئيسية',
      },
    },
    messages: {
      success: {
        title: 'نجاح',
        desc: 'تمت العملية بنجاح!',
      },
      warning: {
        title: 'تحذير!',
        desc: '',
      },
      failed: {
        title: 'خطأ',
        desc: 'حدث خطأ ما.',
      },
      note: {
        dismiss: 'إغلاق',
        info: 'ملاحظة',
        warning: 'تحذير',
        error: 'خطأ',
      },
    },
    shared: {
      validation: {
        required: 'هذا الحقل مطلوب',
        minDigitsLength: 'الحد الأدنى لعدد الخانات المسموح به هو {{minLength}}',
        maxDigitsLength: 'الحد الأعلى لعدد الخانات المسموح به هو {{maxLength}}',
        minLength: 'الحد الأدنى للعدد المسموح به هو {{minLength}}',
        maxLength: 'الحد الأعلى للعدد المسموح به هو {{maxLength}}',
        invalidEmail: 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
        notOnlySpaces: 'يجب أن لا يحتوي الحقل على فراغات فقط.',
        onlyTextWithoutNumbers: 'يحب ان لا يحتوي الحقل على أرقام.',
        arabicPattern: 'يجب ان يحتوى الاسم بالعربي.',
        englishPattern: 'يجب ان يحتوى الاسم بالانجليزي.',
        passwordComplexityValidator:
          'يجب أن يحتوي كلمة المرور على حرف إنجليزي كبير واحد على الأقل، وحرف إنجليزي صغير واحد على الأقل، ورقم واحد على الأقل، ورمز خاص واحد على الأقل.',
        digitsOnlyError: 'يجب أن يحتوي الحقل على أرقام فقط.',
        emailOrPhoneNumberError:
          'يرجى إدخال بريد إلكتروني أو رقم هاتف صحيح (يبدأ بـ + أو 00).',
        minAge:
          'يجب أن يكون العمر أكبر من {{requiredAge}} سنة، ولكن يبلغ {{actualAge}} سنة.',
        passwordMismatchValidation:
          'كلمة المرور الجديدة وتأكيد كلمة المرور غير متطابقة.',
        invalidCurrentPassword: 'كلمة المرور الحالية غير صحيحة.',
      },
      search: 'بحث',
      searchPlaceHolder: 'ابحث...',
      dialog: {
        confirm: 'تأكيد',
        cancel: 'إلغاء',
        close: 'إغلاق',
        informative: {
          title: 'تنبيه',
        },
        warning: {
          title: 'انتبه!',
          desc: 'هل أنت متأكد من اتمام العملية؟',
        },
        deActivate: {
          description:
            'سيتم الغاء التعديلات في حال الخروج من الصفحة، هل أنت متأكد من المتابعة؟',
        },
      },
      misc: {
        back: 'رجوع',
        preview: 'عرض',
        remove: 'إزالة',
        edit: 'تعديل',
        delete: 'حذف',
        cancel: 'الغاء',
        apply: 'تطبيق',
        clear: 'مسح',
        save: 'حفظ',
        next: 'التالي',
        previous: 'السابق',
        reset: 'تفريغ الحقول',
        noResultsFound: 'لم يتم العثور على نتائج.',
        duplicate: 'تكرار',
        copy: 'نسخ',
        active: 'فعال',
        inActive: 'غير فعال',
        deleted: 'محذوف',
        create: 'انشاء',
        selectAllMatchingResults: 'اختيار الكل',
        selectVisibleResults: 'اختيار النتائج المرئية',
        add: 'إضافة',
        timeoutError: 'لقد حدث خطأ في الاتصال، يرجى المحاولة مرة أخرى لاحقًا.',
        activate: 'تفعيل',
        deactivate: 'الغاء التفعيل',
        details: 'التفاصيل',
        male: 'ذكر',
        female: 'أنثى',
        download: 'تنزيل',
        upload: 'رفع',
        clickHere: 'اضغط هنا',
      },
      grid: {
        actions: 'الإجراءات',
        edit: 'تعديل',
        delete: 'حذف',
        view: 'مشاهدة',
        more: 'المزيد',
        noDataFound: 'لم يتم العثور على بيانات.',
        search: 'بحث',
        noResultsFound: 'لم يتم العثور على نتائج.',
        status: 'الحالة',
      },
      placeholder: {
        selectFromList: 'اختر من القائمة',
      },
    },
    paginator: {
      itemsPerPage: 'عدد العناصر في كل صفحة',
      nextPage: 'الصفحة التالية',
      previousPage: 'الصفحة السابقة',
      range: '{{startIndex}} - {{endIndex}} من {{length}}',
    },
  },
};
