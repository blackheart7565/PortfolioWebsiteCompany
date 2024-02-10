import ghPages from 'gulp-gh-pages';

const path = {
	dist_to_gh_pages: "./dist/**/*",
}

export const ghpages = () => {
	return app.gulp.src(path.dist_to_gh_pages)
		.pipe(ghPages());
}