useEffect(() => {
    const slug = window.location.hash
    if (slug) {
        const el = document.querySelector(slug)
        if (el) el.scrollIntoView
    }
}, [])