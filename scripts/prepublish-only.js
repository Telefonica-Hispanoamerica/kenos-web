if (!process.env.CI) {
    const lines = [
        '',
        'Cannot publish from this machine',
        '',
        'To publish, use the  Github Release action workflow:',
        'https://github.com/Telefonica/kenos-web/actions?query=workflow%3ARelease',
        '',
    ];
    console.error(lines.join('\n'));
    process.exit(1);
}
