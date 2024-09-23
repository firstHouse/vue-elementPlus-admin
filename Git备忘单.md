# git����¼

## ��װ

GitHub for Windows
<https://windows.github.com>
GitHub for Mac
<https://mac.github.com>
Git distributions for Linux and POSIX systems are available on the official Git SCM web site.
Git for All Platforms
<http://git-scm.com>

## ���ù���

�����б��زֿ���û���Ϣ��������

`$ git config --global user.name "[name]"`
�����commit�������ù������û���

`$ git config --global user.email "[email address]"`
�����commit�������ù����������ַ

`$ git config --global color.ui auto`
�����а����Ĳ�ɫ���������

## ��֧

��֧��ʹ�� Git ������һ����Ҫ���֡��������κ��ύ���ᷢ���ڵ�ǰ��checked out�����ķ�֧�ϡ�ʹ�� git status �鿴�����ĸ���֧��

`$ git branch [branch-name]`
����һ���·�֧

`$ git switch -c [branch-name]`
�л���ָ����֧�����¹���Ŀ¼(working directory)

`$ git merge [branch]`
��ָ����֧����ʷ�ϲ�����ǰ��֧����ͨ������ȡ����(PR)����ɣ���Ҳ��һ����Ҫ�� Git ������

`$ git branch -d [branch-name]`
ɾ��ָ����֧

## ���и���

����������Ŀ�ļ��ķ�չ

`$ git log`
�г���ǰ��֧�İ汾��ʷ

`$ git log --follow [file]`
�г��ļ��İ汾��ʷ������������

`$ git diff [first-branch]...[second-branch]`
չʾ������֧֮������ݲ���

`$ git show [commit]`
���ָ��commit��Ԫ���ݺ����ݱ仯

`$ git add [file]`
���ļ����п��մ������ڰ汾����

`$ git commit -m "[descriptive message]"`
���ļ��������õؼ�¼�ڰ汾��ʷ��

## �����ύ

�������͹��������滻����ʷ

`$ git reset [commit]`
�������� [commit] ��ĵ��ύ���ڱ��ر������

`$ git reset --hard [commit]`
����������ʷ���Ļ�ָ���ύ��

```С�ģ�������ʷ���ܴ�������������������Ҫ���� GitHub��Զ�ˣ����е��ύ��������������������Ҫ�������ɷ��� github.community ����ϵ֧��(support)��```

## �����ֿ�

��������һ���µĲֿ�ʱ����ֻ�贴��һ�Ρ�Ҫô�ڱ��ش�����Ȼ�����͵� GitHub��Ҫôͨ�� clone һ�����вֿ⡣

`$ git init`
��ʹ�ù� git init �����ʹ������������زֿ���һ�� GitHub �ϵĿղֿ�����������

`$ git remote add origin [url]`
������Ŀ¼ת��Ϊһ�� Git �ֿ�

`$ git clone [url]`
Clone�����أ�һ���Ѵ����� GitHub �ϵĲֿ⣬�������е��ļ�����֧���ύ(commits)

## .gitignore�ļ�

��ʱһЩ�ļ���ò�Ҫ�� Git ���١���ͨ������Ϊ `.gitignore` �������ļ�����ɡ�������� `github.com/github/gitignore` �ҵ����õ� `.gitignore` �ļ�ģ�塣

## ͬ������

���㱾�زֿ��� GitHub.com �ϵ�Զ�˲ֿ�ͬ��

`$ git fetch`

����Զ�˸��ٷ�֧��������ʷ

`$ git merge`

��Զ�˸��ٷ�֧�ϲ�����ǰ���ط�֧

`$ git push`

�����б��ط�֧�ύ�ϴ��� GitHub

`$ git pull`

ʹ������ GitHub �Ķ�ӦԶ�˷�֧���������ύ�����㵱ǰ�ı��ع�����֧��`git pull` �� `git fetch` �� `git merge` �Ľ��

## �����

- **git**: һ����Դ�ķֲ�ʽ�汾����ϵͳ
- **GitHub**: һ���йܺ�Э������ Git �ֿ��ƽ̨
- **commit �ύ**: һ�� Git �������������ֿ�Ŀ��յĹ�ϣֵ
- **branch ��֧**: һ�����Ϳ��ƶ��� commit ָ��
- **clone**: һ���ֿ�ı��ذ汾�����������ύ�ͷ�֧
- **remote Զ��**: һ�� GitHub �ϵĹ����ֿ⣬����С���Աͨ�����������޸�
- **fork**: һ��������һ�û��� GitHub �ϵĲֿ�ĸ���
- **pull request ��ȡ����**: һ�����ڱȽϺ����۷�֧������Ĳ��죬�Ҿ����������ۡ����ɲ��Եȹ��ܵĵط�
- **HEAD**: �����㵱ǰ�Ĺ���Ŀ¼��ʹ��`git checkout` ���ƶ� HEAD ָ�뵽��ͬ�ķ�֧�����(tags)���ύ
